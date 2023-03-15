import tabla from "./tabla.js";
export default{
    name: document.querySelector("#myTabla"),
    frag: document.createDocumentFragment(),

    enlistar(id){
        let tr = document.createElement("TR");
        tr.insertAdjacentHTML("beforeend",`
        <td>${tabla.data.Taditional[id]}</td>
        <td>${tabla.data.PointRange[id]}</td>
        <td>${tabla.data.Letter[id]}</td>
        <td>${tabla.data["SBG-Rating"][id]}</td>
        <td>${tabla.data["Proficiency-Level-With-Standard"][id]}</td>
        `)
        this.frag.append(tr);
        this.name.append(this.frag)
        // let td = document.createElement("TD");
        // td.insertAdjacentText("beforeend",)
    }




}