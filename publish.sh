#!/bin/bash
# NPM 发布脚本

echo "📦 开始发布 q-utils 到 npm..."

# 1. 检查登录状态
echo "1. 检查 npm 登录状态..."
if ! npm whoami &> /dev/null; then
    echo "❌ 未登录 npm，请先运行: npm login"
    exit 1
fi
echo "✅ 已登录: $(npm whoami)"

# 2. 运行测试
echo "2. 运行测试..."
pnpm test || exit 1
echo "✅ 测试通过"

# 3. 构建项目
echo "3. 构建项目..."
pnpm build || exit 1
echo "✅ 构建成功"

# 4. 检查包名
echo "4. 检查包名..."
PACKAGE_NAME=$(node -p "require('./package.json').name")
PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo "📦 包名: $PACKAGE_NAME"
echo "📌 版本: $PACKAGE_VERSION"

# 5. 检查包是否已存在
if npm view "$PACKAGE_NAME@$PACKAGE_VERSION" &> /dev/null; then
    echo "⚠️  版本 $PACKAGE_VERSION 已存在，需要更新版本号"
    read -p "是否更新版本号? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "选择版本类型 (patch/minor/major): " version_type
        npm version "$version_type" || exit 1
        PACKAGE_VERSION=$(node -p "require('./package.json').version")
        echo "✅ 版本已更新为: $PACKAGE_VERSION"
    else
        echo "❌ 取消发布"
        exit 1
    fi
fi

# 6. 发布
echo "5. 发布到 npm..."
npm publish --access public || exit 1
echo "✅ 发布成功!"

# 7. 创建 Git Tag
echo "6. 创建 Git Tag..."
git tag "v$PACKAGE_VERSION" 2>/dev/null && git push origin "v$PACKAGE_VERSION" 2>/dev/null
echo "✅ Tag 已创建: v$PACKAGE_VERSION"

echo ""
echo "🎉 发布完成!"
echo "📦 包地址: https://www.npmjs.com/package/$PACKAGE_NAME"
echo "📌 版本: $PACKAGE_VERSION"
