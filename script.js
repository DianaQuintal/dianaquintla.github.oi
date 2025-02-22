function askDevice(device) {
    let question = '';
    // Se agrega la lógica de preguntas para el mouse
    if (device === 'mouse') {
        question = '¿El mouse no responde?';
        document.getElementById('diagnostic-area').innerHTML = `
            <p class="question">${question}</p>
            <button class="answer-btn" onclick="mouseDiagnosis('yes')">Sí</button>
            <button class="answer-btn" onclick="mouseDiagnosis('no')">No</button>
        `;
    }
      // Diagnóstico para el Monitor
      else if (device === 'monitor') {
        question = '¿El monitor no muestra imagen?';
        document.getElementById('diagnostic-area').innerHTML = `
            <p class="question">${question}</p>
            <button class="answer-btn" onclick="monitorDiagnosis('yes')">Sí</button>
            <button class="answer-btn" onclick="monitorDiagnosis('no')">No</button>
        `;
    }
    // Diagnóstico para la Impresora
    else if (device === 'printer') {
        question = '¿La impresora no imprime?';
        document.getElementById('diagnostic-area').innerHTML = `
            <p class="question">${question}</p>
            <button class="answer-btn" onclick="printerDiagnosis('yes')">Sí</button>
            <button class="answer-btn" onclick="printerDiagnosis('no')">No</button>
        `;
    }
    // Diagnóstico para la Impresora
    else if (device === 'equipo') {
        question = '¿El equipo no enciende?';
        document.getElementById('diagnostic-area').innerHTML = `
            <p class="question">${question}</p>
            <button class="answer-btn" onclick="printerDiagnosis('yes')">Sí</button>
            <button class="answer-btn" onclick="printerDiagnosis('no')">No</button>
        `;
    }
}

// Función de diagnóstico para el Mouse
function mouseDiagnosis(answer) {
    let nextQuestion = '';
    let result = '';
    
    if (answer === 'yes') {
        // Pregunta 1: ¿El mouse es alámbrico o inalámbrico?
        nextQuestion = '¿El mouse es alámbrico o inalámbrico?';
        document.getElementById('diagnostic-area').innerHTML = `
            <p class="question">${nextQuestion}</p>
            <button class="answer-btn" onclick="mouseDiagnosisType('alambrico')">Alámbrico</button><br>
            <button class="answer-btn" onclick="mouseDiagnosisType('inalambrico')">Inalámbrico</button><br>
        `;
    } else {
        // Si la respuesta es no, mostrar el diagnóstico inicial
        result = 'Revisa si el mouse está conectado correctamente o prueba con otro puerto USB.';
        displayResult(result);
    }
}

// Función para manejar el tipo de mouse
function mouseDiagnosisType(type) {
    let nextQuestion = '';
    let result = '';
    
    if (type === 'alambrico') {
        // Si el mouse es alámbrico
        nextQuestion = '¿El mouse está correctamente conectado al puerto USB?';
        document.getElementById('diagnostic-area').innerHTML = `
            <p class="question">${nextQuestion}</p>
            <button class="answer-btn" onclick="mouseDiagnosisConnection('yes')">Sí</button>
            <button class="answer-btn" onclick="mouseDiagnosisConnection('no')">No</button>
        `;
    } else if (type === 'inalambrico') {
        // Si el mouse es inalámbrico
        nextQuestion = '¿El mouse está encendido y tiene batería?';
        document.getElementById('diagnostic-area').innerHTML = `
            <p class="question">${nextQuestion}</p>
            <button class="answer-btn" onclick="mouseDiagnosisBattery('yes')">Sí</button>
            <button class="answer-btn" onclick="mouseDiagnosisBattery('no')">No</button>
        `;

    }
}

// Función para verificar la conexión del mouse alámbrico
function mouseDiagnosisConnection(answer) {
    let result = '';
    
    if (answer === 'yes') {
        result = '</p>¡El mouse debería estar funcionando correctamente! Si el problema persiste, prueba otro puerto USB.</p>';
        } else {
        result = '</p>Revisa la conexión del mouse al puerto USB. Si el problema persiste, prueba otro puerto o cable.</p>';
    }
    displayResult(result);
}

// Función para verificar el estado de la batería del mouse inalámbrico
function mouseDiagnosisBattery(answer) {
    let result = '';
    
    if (answer === 'yes') {

        result = '¡El mouse debería funcionar! Si sigue sin responder, prueba reiniciando la computadora o el receptor inalámbrico.';
    } else {
        result = 'Revisa la batería del mouse o reemplázala. Asegúrate de que esté correctamente emparejado con el receptor inalámbrico.';
    }
    displayResult(result);
}

// Mostrar el resultado final del diagnóstico
function displayResult(result) {
    document.getElementById('diagnostic-area').innerHTML = `
        <p class="diagnosis-result">${result}</p>
        <button class="restart-btn" onclick="restartDiagnosis()">Reiniciar diagnóstico</button>
    `;
}
/*
// Función de diagnóstico para el Monitor
function monitorDiagnosis(answer) {
    let nextQuestion = '';
    let result = '';
    
    if (answer === 'yes') {
        // Pregunta 1: Monitor apagado o sin imagen
        nextQuestion = '¿El monitor está correctamente conectado al puerto de la computadora?';
        document.getElementById('diagnostic-area').innerHTML = `
            <p class="question">${nextQuestion}</p>
            <button class="answer-btn" onclick="monitorDiagnosisConnection('yes')">Sí</button>
            <button class="answer-btn" onclick="monitorDiagnosisConnection('no')">No</button>
        `;
    } else {
        // Si el monitor ya funciona, termina el diagnóstico
        result = '¡El monitor está funcionando correctamente! Si tienes otros problemas, reinicia la computadora.';
        displayResult(result);
    }
}

// Segunda pregunta: ¿El monitor está correctamente conectado al puerto de la computadora?
function monitorDiagnosisConnection(answer) {
    let nextQuestion = '';
    let result = '';
    
    if (answer === 'yes') {
        // Pregunta 2: ¿El brillo de la pantalla está bajo?
        nextQuestion = '¿El brillo del monitor está al mínimo?';
        document.getElementById('diagnostic-area').innerHTML = `
            <p class="question">${nextQuestion}</p>
            <button class="answer-btn" onclick="monitorDiagnosisBrightness('yes')">Sí</button>
            <button class="answer-btn" onclick="monitorDiagnosisBrightness('no')">No</button>
        `;
    } else {
        result = 'Revisa la conexión entre el monitor y la computadora. Si el problema persiste, prueba con otro cable o puerto.';
        displayResult(result);
    }
}

// Tercera pregunta: ¿El brillo del monitor está bajo?
function monitorDiagnosisBrightness(answer) {
    let result = '';
    
    if (answer === 'yes') {
        result = 'Ajusta el brillo del monitor y revisa si se soluciona el problema.';
    } else {
        result = 'Parece que el monitor está funcionando correctamente. Si persiste el problema, verifica el cable o la tarjeta gráfica.';
    }
    displayResult(result);
}
*/
// Mostrar el resultado final del diagnóstico
function displayResult(result) {
    document.getElementById('diagnostic-area').innerHTML = `
        <p class="diagnosis-result">${result}</p>
        <button class="restart-btn" onclick="restartDiagnosis()">Reiniciar diagnóstico</button>
    `;
}

// Función para reiniciar el diagnóstico
function restartDiagnosis() {
    document.getElementById('diagnostic-area').innerHTML = `
        <p class="question">¿Qué dispositivo estás teniendo problemas?</p>
        <button class="answer-btn" onclick="askDevice('mouse')"> Mouse <img src="img/mouse.ico" alt="imagen" width="35"></button>
        <button class="answer-btn" onclick="askDevice('monitor')"> Monitor <img src="img/monitor.ico" alt="imagen" width="35"></button>
        <button class="answer-btn" onclick="askDevice('printer')"> Impresora <img src="img/impresora.ico" alt="imagen" width="35"></button>
        <button class="answer-btn" onclick="askDevice('printer')"> Computadora <img src="img/computadora.ico" alt="imagen" width="35"></button>
    `;
}