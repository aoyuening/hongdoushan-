const STORY_DATA = {
  metadata: {
    species: 'Taxus chinensis', unit: '株', simulated: true,
    years: [1990,1995,2000,2005,2010,2015,2020,2024],
    scope: '仅汇总本演示中有有效记录的省份；不代表全国野生种群总数。',
    note: '省级示例野生个体数。每一时间点为独立演示记录；无记录年份不补值。分布地记录已包含在对应省份数量中，不再重复累加。'
  },
  provinces: [
    {code:'42',name:'湖北省'},{code:'43',name:'湖南省'},{code:'51',name:'四川省'},
    {code:'52',name:'贵州省'},{code:'53',name:'云南省'},{code:'61',name:'陕西省'},
    {code:'36',name:'江西省'},{code:'35',name:'福建省'}
  ],
  // 在这里替换调查记录：null 为缺失，0 为确认为零；省份代码需与 provinces 对应。
  series: {
    '42':[520,478,410,340,295,312,340,365],
    '43':[450,405,348,290,260,268,282,300],
    '51':[620,590,515,465,430,450,488,525],
    '52':[310,286,265,240,225,228,235,248],
    '53':[570,550,510,472,455,448,460,480],
    '61':[220,205,190,null,170,174,185,193],
    '36':[350,320,285,250,235,245,270,295],
    '35':[0,85,90,88,null,96,102,110]
  },
  sites: [
    {id:'s1',name:'示例分布地 A',provinceCode:'42',coord:[112.5,31.0],intro:'以区域中心替代实际位置，展示长期记录的阅读方式。',share:.21},
    {id:'s2',name:'示例分布地 B',provinceCode:'43',coord:[111.5,27.8],intro:'示例样地的起伏，与省级记录同向变化。',share:.18},
    {id:'s3',name:'示例分布地 C',provinceCode:'51',coord:[103.7,30.8],intro:'较高基数的演示区域，用于观察下降后的回升。',share:.24},
    {id:'s4',name:'示例分布地 D',provinceCode:'52',coord:[107.0,26.8],intro:'数量变化较缓的演示区域。',share:.26},
    {id:'s5',name:'示例分布地 E',provinceCode:'53',coord:[102.7,25.5],intro:'区域中心点位，不对应真实植株坐标。',share:.17},
    {id:'s6',name:'示例分布地 F',provinceCode:'36',coord:[115.9,27.7],intro:'用一条小型时间线阅读区域变化。',share:.2}
  ],
  events: [
    {year:2005,title:'演示事件：记录口径检查',detail:'此注释仅为交互演示，不对应真实政策、盗伐或保护行动。与数量变化不存在已证实的因果关系。',isDemo:true,sourceId:'demo'},
    {year:2015,title:'演示事件：监测节点',detail:'模拟监测时间节点，用于展示事件注释的阅读方式；不是实际调查结论。',isDemo:true,sourceId:'demo'}
  ],
  sources: [
    {id:'demo',name:'本项目固定模拟数据',url:null,note:'仅用于可视化交互，不作为物种调查资料。'},
    {id:'map',name:'Supeset / China-GeoData',url:'https://github.com/Supeset/China-GeoData',note:'省级边界及南海附加要素；MIT License。'},
    {id:'echarts',name:'Apache ECharts',url:'https://echarts.apache.org/',note:'图表引擎；Apache License 2.0。'},
    {id:'cites',name:'CITES CoP13 Prop. 48',url:'https://cites.org/sites/default/files/eng/cop/13/prop/E13-P48.pdf',note:'仅辅助核实 Taxus chinensis 物种背景，不提供本页数量。'}
  ]
};
STORY_DATA.observations = STORY_DATA.provinces.flatMap(p => STORY_DATA.metadata.years.map((year,i) => ({provinceCode:p.code,year,count:STORY_DATA.series[p.code][i],status:STORY_DATA.series[p.code][i]===null?'missing':'recorded',sourceId:'demo'})));
window.STORY_DATA = STORY_DATA;
