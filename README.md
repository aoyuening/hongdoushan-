# 红豆杉：正在消失的活化石

一个可离线双击打开的中文交互信息可视化网页。打开 `index.html` 即可阅读；无需构建、登录、API Key 或网络连接。

## 文件

- `index.html`：页面结构与本地脚本入口。
- `style.css`：排版、颜色与响应式样式；配色集中在 `:root`。
- `data.js`：固定模拟数据。替换真实资料时，先核对物种、统计口径和来源，再编辑这里的 `metadata`、`provinces`、`series`、`sites`、`events`、`sources`。`series` 顺序与 `metadata.years` 一致，`null` 为缺失，`0` 为记录为零。新增省份需使用与地图一致的完整名称；新增分布地需写省份代码和脱敏区域坐标。完成后更新页面中的模拟标识和方法说明。
- `app.js`：统一状态与联动逻辑。`total()` 汇总有有效记录的展示省份；`pct()` 计算变化率，并处理零基准；`renderAll()` 同步地图、趋势、对比和档案。
- `assets/echarts.min.js`：本地 ECharts 5.6.0。
- `assets/china-map.js`：本地中国省级 GeoJSON 脚本，避免 `file://` 下 `fetch` 限制。
- `assets/china-province-full.geojson`：原始地图资源，便于溯源。

## 数据边界

演示数量及所有趋势均为固定模拟值，不代表真实的 Taxus chinensis 野生种群。示例分布地数量是省级记录的子集，不重复计入合计。点位为区域中心附近演示位置，不对应珍稀植物野外精确坐标。未覆盖的省份显示“暂无数据”。

## 资源来源

- 地图：[Supeset / China-GeoData](https://github.com/Supeset/China-GeoData)，MIT License，含省级边界与南海附加要素。
- 图表：[Apache ECharts](https://echarts.apache.org/)，Apache License 2.0。
- [CITES CoP13 Prop. 48](https://cites.org/sites/default/files/eng/cop/13/prop/E13-P48.pdf) 仅用于物种背景核对，未用作数量来源。

## 验证

已在 Microsoft Edge 的桌面 1440px 和手机 390px 视口通过 `file://` 实际加载：地图及趋势画布出现、无页面脚本错误或失败请求、无横向溢出。验证了 1990 年合计为 3,040 株、福建 1990 年为记录零值、重置后 2024 年合计为 2,516 株，以及缺失年度在地区对比中标为数据不足。
