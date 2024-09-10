function mostrarDatos(){
    let request = sendRequest('citas', 'GET', '');
    let table = document.getElementById('citas-table');
    table.innerHTML ="";
    request.onload = function(){
        let data = request.response;
        console.log(data);
data.forEach(element => {
table.innerHTML +=`


<tr>

<td>${element.Paciente}</td>
<td>${element.Documento}</td>
<td>${element.Prestador}</td>
<td>${element.Especialidad}</td>
<td>${element.Lugar}</td>
<td>${element.Costo}</td>
<td>${element.FechayHora}</td>

<td>


<button type="button" class="boton-edit" onclick='window.location="/fomr_citas.html?id=${element._id}"' >Editar</button>

<button type="button" class="boton-elim" onclick='deleteCitas("${element._id}")'
>Eliminar</button>



</td>
</tr>
`

});

    }
    request.onerror = function(){
        table.innerHTML = `
        <tr>
        <td colspan="">error al traer los datos</td>
        </tr>
        `
    }
}



function deleteCitas(_id){
    let request = sendRequest('citas/'+_id, 'DELETE', '');
    request.onload = function(){
        mostrarDatos();
    } 
}




function guardarCitas(){
    let pac = document.getElementById('paciente-p').value
    let doc = document.getElementById('documento-d').value
    let pre = document.getElementById('prestador-p').value
    let esp = document.getElementById('especialidad-e').value
    let lug = document.getElementById('lugar-l').value
    let cos = document.getElementById('costo-c').value
    let fec = document.getElementById('fechayhora-f').value
    let data ={'Paciente':pac, 'Documento':doc, 'Prestador':pre, 'Especialidad':esp, 'Lugar':lug, 'Costo':cos, 'FechayHora':fec,}
    let request = sendRequest('citas/', 'POST', data);
    request.onload = function(){
        window.location='citas.html'
    }

    request.onerror = function(){
        alert("Error al guardar los datos")
    }
}


//septiembre


function cargarDatos(id){
    let request = sendRequest('citas/'+id,'GET', '');
    let pac = document.getElementById('paciente-p')
    let doc = document.getElementById('documento-d')
    let pre = document.getElementById('prestador-p')
    let esp = document.getElementById('especialidad-e')
    let lug = document.getElementById('lugar-l')
    let cos = document.getElementById('costo-c')
    let fec = document.getElementById('fechayhora-f')
    
    request.onload = function(){
        
        let data = request.response;
        console.log(data)
        pac.value = data.Paciente
        doc.value = data.Documento
        pre.value = data.Prestador
        esp.value = data.Especialidad
        lug.value = data.Lugar
        cos.value = data.Costo
        fec.value = data.FechayHora

        }


    request.onerror = function(){
        alert("Error al cargar los datos")
    }

}


function modificarDatos(id){
    let pac = document.getElementById('paciente-p').value
    let doc = document.getElementById('documento-d').value
    let pre = document.getElementById('prestador-p').value
    let esp = document.getElementById('especialidad-e').value
    let lug = document.getElementById('lugar-l').value
    let cos = document.getElementById('costo-c').value
    let fec = document.getElementById('fechayhora-f').value
    let data ={'Paciente':pac, 'Documento':doc, 'Prestador':pre, 'Especialidad':esp, 'Lugar':lug, 'Costo':cos, 'FechayHora':fec,}
    let request = sendRequest('citas/'+id, 'PUT', data);
    request.onload = function(){
        window.location='citas.html'
    }

    request.onerror = function(){
        alert("Error al guardar los datos")
    }
}