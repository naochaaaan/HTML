function loadXMLDoc(url) {
    var doc = new XMLHttpRequest();
    doc.open("GET", url, false); //同期モード
    doc.send();
    return doc.responseXML;
}

var doc = loadXMLDoc("report6.xml");

// デザイン学部の要素ノードに属性ノード「学科数」を追加
var elt_ds = doc.getElementsByTagName("学部").item(0);
var att_ds = doc.createAttribute("学科数");
att_ds.textContent = "1";
elt_ds.setAttributeNode(att_ds);

// 医療保健学部の要素ノードに属性ノード「学科数」を追加
elt_hs = doc.getElementsByTagName("学部").item(1);
att_hs = doc.createAttribute("学科数");
att_hs.textContent = "5";
elt_hs.setAttributeNode(att_hs);

// 工学部の要素ノードに属性ノード「学科数」を追加する。
elt_es = doc.getElementsByTagName("学部").item(2);
att_es = doc.createAttribute("学科数");
att_es.textContent = "3";
elt_es.setAttributeNode(att_es);

// メディア学部の要素ノードに属性ノード「学科数」を追加する。
elt_ms = doc.getElementsByTagName("学部").item(3);
att_ms = doc.createAttribute("学科数");
att_ms.textContent = "1";
elt_ms.setAttributeNode(att_ms);

// 応用生物学部の要素ノードに属性ノード「学科数」を追加する。
elt_bs = doc.getElementsByTagName("学部").item(4);
att_bs = doc.createAttribute("学科数");
att_bs.textContent = "1";
elt_bs.setAttributeNode(att_bs);


// 他学部の要素ノードと同等となるように、コンピュータサイエンス学部の要素ノードを作成して追加する。
var tut = doc.getElementsByTagName("東京工科大学").item(0);
var elt_cs = doc.createElement("学部");
elt_cs.textContent = "コンピュータサイエンス";

var att_cs_leader = doc.createAttribute("学部長");
att_cs_leader.textContent = "竹田昌弘";

var att_cs_nod = doc.createAttribute("学科数");
att_cs_nod.textContent = "1";

elt_cs.setAttributeNode(att_cs_leader);
elt_cs.setAttributeNode(att_cs_nod);
tut.appendChild(elt_cs);


// 教養学環の要素ノードに属性ノード「科目群数」を追加する。
elt = doc.getElementsByTagName("学環").item(0);
att = doc.createAttribute("科目群数");
att.textContent = "4";
elt.setAttributeNode(att);


// 各学部の名称、学科数、学部長を出力する。
var nodes = doc.getElementsByTagName("学部");
for (var i = 0; i < nodes.length; i++) {
    document.write(nodes.item(i).textContent + "学部，");
    document.write("学科" + nodes.item(i).attributes.item(1).textContent + "，");
    document.write(nodes.item(i).attributes.item(0).textContent + "学部長<br />");
}

document.write("<hr />");


// 教養学環の名称、科目群数、学環長を出力する。
nodes = doc.getElementsByTagName("学環");
for (var i = 0; i < nodes.length; i++) {
    document.write(nodes.item(i).textContent + "学環，");
    document.write("科目群数" + nodes.item(i).attributes.item(1).textContent + "，");
    document.write(nodes.item(i).attributes.item(0).textContent + "学環長<br />");
}

document.write("<hr />");