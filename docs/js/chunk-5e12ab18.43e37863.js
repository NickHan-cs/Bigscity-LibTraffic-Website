(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e12ab18"],{"26ff":function(e,t,c){"use strict";c.r(t);var o=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"container"},[e._m(0),c("div",{staticClass:"content"},[c("p",{staticClass:"title"},[e._v("标准赛道")]),c("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),c("p",{staticStyle:{"text-indent":"2em"}},[e._v("LibTraffic为每个任务实现了一套标准赛道。标准赛道上，使用项目提供的原始数据集、标准数据模块（Data 模块）、标准测评模块（Evaluator 模块），从而约束不同模型使用相同的数据输入与测评指标，以提高测评结果的可比性。")]),c("p",{staticStyle:{"text-indent":"2em"}},[e._v("下面对不同任务的标准数据输入格式与测评输入格式进行说明：")]),c("br"),c("p",{staticClass:"sectitle"},[e._v("交通状态预测")]),c("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),c("p",{staticStyle:{"text-indent":"2em"}},[e._v("具体而言，交通状态预测包含3类任务：交通速度预测、交通流量预测和交通需求量预测。根据交通数据的不同空间结构，交通状态数据一般可以用如下几种格式的张量进行表示：")]),e._m(1),e._m(2),e._m(3),c("p",[e._v("标准测评模块的输入格式为字典对象，该对象所具有的键名如下：")]),e._m(4),c("br"),c("p",{staticClass:"sectitle"},[e._v("轨迹位置预测")]),c("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e._m(5),e._m(6),c("p",{staticStyle:{"text-indent":"2em"}},[e._v("标准测评输入格式为字典对象，该字典具有的键名如下：")]),e._m(7),c("br")],1)])},i=[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"header"},[c("div",{staticStyle:{"padding-top":"20px",color:"white"}},[c("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("任务")]),c("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[e._v(" LibTraffic为每个支持的时空数据挖掘任务"),c("br"),e._v(" 实现了一套标准赛道，提高不同模型的性能可比性。 ")])])])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ul",[c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(N,T,F)")]),e._v("的三维张量，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("T")]),e._v("是时间长度，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("F")]),e._v("是特征维度，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("N")]),e._v("是传感器的个数。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(T,F,I,J)")]),e._v("的四维张量，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("T")]),e._v("是时间长度，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("F")]),e._v("是特征维度，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("I,J")]),e._v("表示网格数据的行列索引。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(T,F,S,T)")]),e._v("的四维张量，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("T")]),e._v("是时间长度，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("F")]),e._v("是特征维度，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("S,T")]),e._v("表示"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("od")]),e._v("数据的起点和终点的编号。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(T,F,SI,SJ,TI,TJ)")]),e._v("的六维张量，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("T")]),e._v("是时间长度，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("F")]),e._v("是特征维度，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(SI,SJ,TI,TJ)")]),e._v("表示网格结构的"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("grid-od")]),e._v("数据的起点和终点的行列索引。")])])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",{staticStyle:{"text-indent":"2em"}},[e._v("标准模型输入格式为类字典的"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("Batch")]),e._v("对象实例，该对象所具有的键名如下：")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ul",[c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("X")]),e._v("：模型输入的多维张量，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, T_in, space_dim, feature_dim)")]),e._v("，分别表示 batch 中的样本总数，输入时间窗的宽度，空间上的维度，数据特征维数。其中，空间上的维度可以是上文中的"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("N")]),e._v("或"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("I,J")]),e._v("或"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("S,T")]),e._v("或"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("SI, SJ, TI, TJ")]),e._v("。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y")]),e._v("：模型期望输出的多维张量，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, T_out, space_dim, feature_dim)")]),e._v("，分别表示 batch 中的样本总数，输出时间窗的宽度，空间上的维度，数据特征维数。其中，空间上的维度可以是上文中的"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("N")]),e._v("或"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("I,J")]),e._v("或"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("S,T")]),e._v("或"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("SI, SJ, TI, TJ")]),e._v("。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("X_ext")]),e._v("：可选的外部数据，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, T_in, ext_dim)")]),e._v("，分别表示 batch 中的样本总数，输入时间窗的宽度，空间上的维度，外部数据特征维数。"),c("strong",[e._v("部分模型可能直接将"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("X_ext")]),e._v("融合到"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("X")]),e._v("中作为模型的输入。")])]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y_ext")]),e._v("：可选的外部数据，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, T_out, ext_dim)")]),e._v("，分别表示 batch 中的样本总数，输出时间窗的宽度，空间上的维度，外部数据特征维数。")])])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ul",[c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y_true")]),e._v("：真实值，格式同输入中的"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y")]),e._v("。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y_pred")]),e._v("：预测值，格式同输入中的"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y")]),e._v("。")])])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("p",{staticStyle:{"text-indent":"2em"}},[e._v("标准数据输入格式为类字典的"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("Batch")]),e._v("对象实例，该对象所具有的键名如下：")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ul",[c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("history_loc")]),e._v("：历史轨迹位置信息，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, history_len)")]),e._v("，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("history_len")]),e._v("为历史轨迹的长度。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("history_tim")]),e._v("：历史轨迹时间信息，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, history_len)")]),e._v("。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("current_loc")]),e._v("：当前轨迹位置信息，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, current_len)")]),e._v("，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("current_len")]),e._v("为当前轨迹的长度。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("current_tim")]),e._v("：当前轨迹时间信息，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, current_len)")]),e._v("。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("uid")]),e._v("：每条轨迹所属交通使用者的ID，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v("。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("target")]),e._v("：期望的下一跳位置，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v("。")])])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ul",[c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("uid")]),e._v("：每条输出所属的交通使用者ID，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v("。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("loc_true")]),e._v("：期望下一跳位置信息，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v("。")]),c("li",[c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("loc_pred")]),e._v("：模型预测输出，"),c("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, output_dim)")]),e._v("。")])])}],s={data:function(){return{}},components:{}},l=s,_=(c("c2ca"),c("4ac2")),a=Object(_["a"])(l,o,i,!1,null,"64494026",null);t["default"]=a.exports},5973:function(e,t,c){},c2ca:function(e,t,c){"use strict";c("5973")}}]);
//# sourceMappingURL=chunk-5e12ab18.43e37863.js.map