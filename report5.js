function show_cup() {
    var node = document.getElementById("cup");
    node.textContent = "カップヌードル";
    node.style.color = "red";
}

function show_instant() {
    var node = document.getElementById("instant");
    node.textContent = "お椀で食べるどん兵衛";
    node.style.color = "blue";
}

function deletepage() {
    document.getElementById("rank").textContent = null;
}

function showlist() {
    deletepage();

    var list = document.createElement("ul");
    document.getElementById("rank").appendChild(list);

    var item1 = document.createElement("li");
    item1.textContent = "カップラーメン";
    list.appendChild(item1);

    var sublist1 = document.createElement("ol");
    item1.appendChild(sublist1);

    var subitem11 = document.createElement("li");
    subitem11.textContent = "カップヌードル";
    sublist1.appendChild(subitem11);

    var subitem12 = document.createElement("li");
    subitem12.textContent = "カップヌードル シーフードヌードル";
    sublist1.appendChild(subitem12);

    var subitem13 = document.createElement("li");
    subitem13.textContent = "カップヌードル カレー";
    sublist1.appendChild(subitem13);

    var list = document.createElement("ul");
    document.getElementById("rank").appendChild(list);

    var item1 = document.createElement("li");
    item1.textContent = "袋麺・インスタント麺";
    list.appendChild(item1);

    sublist1 = document.createElement("ol");
    item1.appendChild(sublist1);

    subitem11 = document.createElement("li");
    subitem11.textContent = "お椀で食べるどん兵衛";
    sublist1.appendChild(subitem11);

    subitem12 = document.createElement("li");
    subitem12.textContent = "チキンラーメン";
    sublist1.appendChild(subitem12);

    subitem13 = document.createElement("li");
    subitem13.textContent = "チャンポンめん";
    sublist1.appendChild(subitem13);
}


function showtable() {
    deletepage();

    var table = document.createElement("table");
    table.setAttribute("border", "1");
    document.getElementById("rank").appendChild(table);

    var line1 = document.createElement("tr");
    table.appendChild(line1);
    var line2 = document.createElement("tr");
    table.appendChild(line2);
    var line3 = document.createElement("tr");
    table.appendChild(line3);
    var line4 = document.createElement("tr");
    table.appendChild(line4);


    var cell_1 = document.createElement("th");
    cell_1.textContent = "順位";
    line1.appendChild(cell_1);

    var cell_2 = document.createElement("th");
    cell_2.textContent = "カップラーメン";
    line1.appendChild(cell_2);

    var cell_3 = document.createElement("th");
    cell_3.textContent = "袋麺・インスタント麺";
    line1.appendChild(cell_3);


    var cell_4 = document.createElement("td");
    cell_4.textContent = "1";
    line2.appendChild(cell_4);

    var cell_5 = document.createElement("td");
    cell_5.textContent = "カップヌードル";
    line2.appendChild(cell_5);

    var cell_6 = document.createElement("td");
    cell_6.textContent = "お椀で食べるどん兵衛";
    line2.appendChild(cell_6);


    var cell_7 = document.createElement("td");
    cell_7.textContent = "2";
    line3.appendChild(cell_7);

    var cell_8 = document.createElement("td");
    cell_8.textContent = "カップヌードル シーフードヌードル";
    line3.appendChild(cell_8);

    var cell_9 = document.createElement("td");
    cell_9.textContent = "チキンラーメン";
    line3.appendChild(cell_9);


    var cell_10 = document.createElement("td");
    cell_10.textContent = "3";
    line4.appendChild(cell_10);

    var cell_11 = document.createElement("td");
    cell_11.textContent = "カップヌードル カレー";
    line4.appendChild(cell_11);

    var cell_12 = document.createElement("td");
    cell_12.textContent = "チャンポンめん";
    line4.appendChild(cell_12);
}
