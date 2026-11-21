import type { Bloque } from "../tipos";

export const AMP_DOLOR: Record<string, Bloque[]> = {
  "duele-poner-brackets": [
    { tipo: "h2", texto: "Qué comer la primera semana" },
    { tipo: "p", texto: "Los tres primeros días cuesta morder y conviene tenerlo resuelto antes, no improvisando con hambre a las nueve de la noche." },
    { tipo: "tabla", encabezados: ["Momento", "Qué funciona bien"], filas: [["Días 1 a 2", "Sopas, purés, yogur, huevo revuelto, licuados"], ["Días 3 a 4", "Pasta blanda, pescado, aguacate, frijoles, arroz"], ["Días 5 a 7", "Casi normal, cortando todo en trozos"], ["Después", "Dieta normal, evitando lo duro y lo pegajoso"]] },
    { tipo: "p", texto: "Un truco que funciona: ten preparado algo frío para las primeras horas. Un helado o un licuado frío alivian la inflamación del ligamento y de paso resuelven la cena." },
    { tipo: "h2", texto: "Las llagas de las primeras semanas" },
    { tipo: "p", texto: "Es lo que más incomoda y lo que menos se advierte. La mejilla y los labios todavía no conocen el relieve del bracket, y durante diez o quince días aparecen rozaduras." },
    { tipo: "lista", items: ["Cera de ortodoncia sobre el bracket que roza: se amasa un trocito y se aplica seco.", "Enjuagues con agua tibia y sal, tres o cuatro veces al día.", "Geles de uso bucal para llagas, de farmacia, si molesta mucho.", "Evita retirar la cera cada rato: déjala puesta mientras la zona se endurece."] },
    { tipo: "p", texto: "En dos semanas la mucosa se adapta y el tema desaparece. Si una llaga concreta no cierra en diez días, revísala: puede haber una punta de alambre marcándola." },
    { tipo: "h2", texto: "Cómo planear la cita de colocación" },
    { tipo: "pasos", items: ["Agenda en un día en el que después no tengas compromisos que exijan hablar mucho.", "Come bien antes: vas a estar una hora y media con la boca abierta.", "Lleva tu analgésico habitual y tómalo al salir, sin esperar a que duela.", "Ten en casa comida blanda para dos o tres días.", "Pide cera de ortodoncia antes de irte y guarda una en la bolsa."] },
  ],

  "duele-la-endodoncia": [
    { tipo: "h2", texto: "Qué se siente exactamente, paso a paso" },
    { tipo: "p", texto: "Saber lo que viene reduce bastante la ansiedad, que en la práctica es lo que más amplifica la sensación de dolor." },
    { tipo: "pasos", items: ["Gel anestésico en la encía: no se siente nada, sabe un poco amargo.", "Anestesia: una presión y un pinchazo breve, menos que el de un análisis de sangre.", "Espera de cinco a diez minutos hasta que la zona está dormida del todo.", "Colocación del dique de goma: una presión en el diente, nada más.", "Apertura y limpieza: vibración y sonido, sin dolor.", "Sellado y radiografía de control: solo presión.", "Al final, labio y lengua dormidos durante dos o tres horas."] },
    { tipo: "h2", texto: "Si te han dicho que a ti la anestesia no te hace efecto" },
    { tipo: "p", texto: "Es un comentario frecuente y casi nunca significa lo que la gente cree. Las causas habituales son concretas y tienen solución." },
    { tipo: "lista", items: ["Infección activa: el tejido inflamado es ácido y reduce la eficacia del anestésico. Se resuelve con técnicas complementarias.", "Anatomía: algunos pacientes tienen una inervación accesoria que exige una técnica distinta.", "Ansiedad alta: amplifica cualquier sensación y hace interpretar la presión como dolor.", "Experiencias previas en las que no se esperó lo suficiente a que la anestesia hiciera efecto."] },
    { tipo: "p", texto: "Dilo al agendar y al empezar. Hay alternativas: refuerzo intraligamentario, anestesia intrapulpar, cambiar el tipo de anestésico. Lo que no es aceptable es que te pidan aguantar." },
    { tipo: "h2", texto: "De dónde viene la mala fama" },
    { tipo: "p", texto: "De los años setenta y ochenta, con anestésicos menos potentes, sin magnificación y con instrumental manual que alargaba muchísimo la sesión. Mucha gente conoció la endodoncia por el relato de sus padres o abuelos, y ese relato ya no describe el procedimiento actual." },
    { tipo: "p", texto: "Hoy la referencia honesta es esta: la mayoría de los pacientes describe la sesión como más larga que molesta, y comparan la sensación con la de una resina grande." },
  ],

  "miedo-al-dentista-que-hacer": [
    { tipo: "h2", texto: "Técnicas que funcionan dentro del consultorio" },
    { tipo: "p", texto: "No son trucos de autoayuda: son cosas que cambian la experiencia de verdad y que puedes pedir sin dar explicaciones." },
    { tipo: "lista", items: ["Señal de parada: levantar la mano significa que se detiene todo, de inmediato. Pactarla al inicio cambia la sensación de control.", "Audífonos con tu música o un podcast: el sonido de la turbina es, para mucha gente, el detonante real.", "Respiración 4-7-8: inhalar cuatro segundos, retener siete, exhalar ocho. Baja la frecuencia cardiaca en un par de minutos.", "Pedir que te narren cada paso antes de hacerlo, o justo lo contrario: pedir que no te cuenten nada.", "Citas cortas al principio, aunque sean más citas."] },
    { tipo: "h2", texto: "Por dónde empezar cuando hay mucho acumulado" },
    { tipo: "p", texto: "Ver un plan de doce procedimientos es lo que hace que la gente no vuelva. La forma de que no pase es ordenarlo por prioridad y tratarlo por etapas, con una conversación clara sobre qué urge y qué puede esperar." },
    { tipo: "tabla", encabezados: ["Prioridad", "Qué entra", "Cuándo"], filas: [["1", "Dolor e infección activa", "Ya"], ["2", "Caries que avanzan", "Semanas siguientes"], ["3", "Encías y limpieza", "En paralelo"], ["4", "Reponer piezas, función", "Después"], ["5", "Estética", "Al final"]] },
    { tipo: "p", texto: "Ver el plan ordenado así, con fechas aproximadas, suele cambiar la sensación de «esto es imposible» por la de «esto lleva unos meses»." },
    { tipo: "h2", texto: "Cuándo es fobia y qué cambia entonces" },
    { tipo: "p", texto: "Hay una diferencia entre el nerviosismo normal y la fobia dental. Si solo agendar la cita te produce taquicardia, insomnio la noche anterior, sudoración o náuseas, o si has cancelado varias veces en el último momento, es fobia y tiene abordajes específicos." },
    { tipo: "p", texto: "En esos casos se trabaja con exposición gradual, a veces con apoyo psicológico, y en procedimientos concretos puede valorarse sedación consciente. Lo primero es decirlo: no es una exageración y quien te atiende lo ha visto muchas veces." },
  ],

  "cuanto-dura-el-dolor-despues-de-una-endodoncia": [
    { tipo: "h2", texto: "Por qué duele más al segundo día que al primero" },
    { tipo: "p", texto: "Es una secuencia que desconcierta: sales de la clínica bien y al día siguiente está peor. Tiene explicación." },
    { tipo: "p", texto: "La anestesia tarda unas horas en pasarse del todo, así que el primer tramo del día está cubierto. Mientras tanto, la inflamación del ligamento periodontal va subiendo y alcanza su pico entre las veinticuatro y las cuarenta y ocho horas. A partir de ahí baja sola." },
    { tipo: "p", texto: "Por eso la recomendación de tomar el analgésico antes de que se pase la anestesia no es un detalle: es lo que evita que te alcance el pico sin cobertura." },
    { tipo: "h2", texto: "Cuándo escribir a la clínica" },
    { tipo: "tabla", encabezados: ["Síntoma", "Qué significa", "Qué hacer"], filas: [["Molestia al morder que baja cada día", "Normal", "Analgésico y paciencia"], ["El diente se siente más alto", "Restauración alta", "Cita corta de ajuste"], ["Dolor que sube desde el día 3", "Posible complicación", "Avisar"], ["Hinchazón de cara o encía", "Infección activa", "Ir el mismo día"], ["Fiebre o malestar general", "Infección extendida", "Atención inmediata"]] },
    { tipo: "h2", texto: "El ajuste de cinco minutos que mucha gente aguanta meses" },
    { tipo: "p", texto: "Cuando la restauración provisional queda un poco alta, ese diente golpea primero al cerrar y recibe toda la fuerza de la mordida. Duele al morder, duele al masticar y no mejora con el tiempo porque la causa es mecánica, no inflamatoria." },
    { tipo: "p", texto: "Se resuelve puliendo el punto de contacto con el papel de articular: cinco minutos. No hay ninguna razón para aguantarlo semanas, y es una de las consultas más agradecidas que hay." },
  ],

  "me-duele-la-muela-que-hago-mientras-llego": [
    { tipo: "h2", texto: "Qué tipo de dolor tienes" },
    { tipo: "p", texto: "Describir bien el dolor ayuda a que te orienten mejor por WhatsApp y a que la clínica prepare lo que hace falta antes de que llegues." },
    { tipo: "tabla", encabezados: ["Cómo se siente", "Qué suele indicar"], filas: [["Punzada corta con el frío, se quita rápido", "Sensibilidad o caries superficial"], ["Dolor que late y empeora acostado", "Nervio inflamado: endodoncia"], ["Duele al morder, el diente se siente alto", "Inflamación del ligamento"], ["Dolor con hinchazón y mal sabor", "Absceso"], ["Dolor sordo en varias muelas de arriba", "Puede ser sinusitis"], ["Dolor al abrir la boca, cerca del oído", "Articulación, no el diente"]] },
    { tipo: "h2", texto: "Cómo pasar la noche" },
    { tipo: "p", texto: "El dolor dental empeora al acostarse porque aumenta la presión sanguínea en la cabeza y el nervio inflamado está encerrado en un espacio que no cede. Estas medidas ayudan a dormir algo:" },
    { tipo: "lista", items: ["Duerme semisentado, con dos o tres almohadas.", "No te acuestes del lado que duele.", "Analgésico antes de meterte a la cama, no cuando ya no aguantes.", "Frío por fuera de la mejilla antes de dormir, veinte minutos.", "Evita alcohol: deshidrata y empeora la inflamación.", "Enjuaga con agua tibia y sal justo antes de acostarte."] },
    { tipo: "h2", texto: "El antibiótico que te sobró de la otra vez" },
    { tipo: "alerta", texto: "Es la peor idea de esta lista y la más común. El antibiótico no llega al interior del conducto, donde ya no hay riego sanguíneo, así que no resuelve la causa. Lo que hace es bajar los síntomas unos días, retrasar la consulta y seleccionar bacterias resistentes para la próxima vez. Cuando hace falta, se receta con criterio y acompañando al tratamiento, nunca en lugar de él." },
    { tipo: "h2", texto: "Qué llevar a la cita de urgencia" },
    { tipo: "lista", items: ["Lista de los medicamentos que tomas habitualmente.", "Alergias conocidas, sobre todo a antibióticos o anestésicos.", "Radiografías previas si las tienes, aunque sean de hace años.", "Si estás embarazada o podrías estarlo, dilo al llegar.", "Condiciones médicas relevantes: diabetes, problemas cardiacos, anticoagulantes."] },
  ],
};

export const AMP_TIEMPOS: Record<string, Bloque[]> = {
  "cuanto-dura-un-tratamiento-de-ortodoncia": [
    { tipo: "h2", texto: "Las fases por las que pasa el tratamiento" },
    { tipo: "p", texto: "No es un avance lineal: hay etapas con mucho movimiento visible y etapas en las que parece que no pasa nada y es cuando se está haciendo lo más fino." },
    { tipo: "tabla", encabezados: ["Fase", "Cuándo", "Qué se hace"], filas: [["Nivelación y alineación", "Meses 1 a 6", "Los dientes se ordenan: el cambio más visible"], ["Corrección de mordida", "Meses 6 a 14", "Trabajo entre arcadas, con ligas"], ["Cierre de espacios", "Meses 10 a 20", "Si hubo extracciones"], ["Detallado", "Últimos 3 a 6 meses", "Ajustes finos, torque, asentamiento"], ["Retención", "Siempre", "Retenedores"]] },
    { tipo: "p", texto: "La fase de detallado es la que más desespera porque visualmente ya está, y es justo la que separa unos dientes que se ven derechos de una mordida que funciona. Saltársela es la causa más común de recaída temprana." },
    { tipo: "h2", texto: "Las ligas intermaxilares: la causa número uno de retraso" },
    { tipo: "p", texto: "Son las ligas que van de la arcada de arriba a la de abajo y que el paciente se pone y se quita. Trabajan sobre la relación entre maxilares, que es la parte que los brackets solos no corrigen." },
    { tipo: "p", texto: "La indicación habitual es traerlas prácticamente todo el día y cambiarlas a diario. Usarlas solo por la noche no es «la mitad de efectivo»: en muchos casos es inefectivo, porque el movimiento necesita fuerza continua. Es la diferencia entre terminar en dieciocho meses o en veintiocho." },
    { tipo: "h2", texto: "Cómo saber si tu tratamiento va bien" },
    { tipo: "lista", items: ["Te toman fotografías de control cada cierto número de citas.", "Te explican qué se hizo en el ajuste de hoy y qué toca después.", "Hay una radiografía de control a mitad del tratamiento.", "Cuando preguntas cuánto falta, te dan un rango y una razón.", "Si el caso se desvía, te lo dicen y replantean, en vez de alargar en silencio."] },
  ],

  "cuanto-tarda-una-endodoncia": [
    { tipo: "h2", texto: "Qué ocupa el tiempo de la sesión" },
    { tipo: "p", texto: "Sorprende saber que la parte de «sacar el nervio» es una fracción pequeña. El tiempo se va en lo que determina que el tratamiento dure veinte años." },
    { tipo: "tabla", encabezados: ["Etapa", "Tiempo aproximado"], filas: [["Anestesia y espera", "10 a 15 min"], ["Aislamiento con dique", "5 a 10 min"], ["Apertura y localización de conductos", "10 a 25 min"], ["Limpieza, conformado y desinfección", "20 a 45 min"], ["Secado y sellado", "10 a 15 min"], ["Radiografía de control y provisional", "10 min"]] },
    { tipo: "p", texto: "La desinfección es la etapa que más condiciona el resultado y la primera que se recorta cuando una clínica necesita hacer tres endodoncias en el tiempo de una. Si te ofrecen una endodoncia de molar en treinta minutos, la pregunta razonable es qué se está dejando fuera." },
    { tipo: "h2", texto: "Cómo organizarte el día" },
    { tipo: "lista", items: ["Come antes: vas a estar un buen rato con la boca abierta y luego con anestesia.", "Calcula el tiempo de la tabla más media hora de margen.", "Si puedes, deja la tarde libre: la molestia aparece cuando se pasa la anestesia.", "No agendes algo que exija hablar mucho justo después.", "Si vienes de lejos, avísalo: procuramos resolver en una sola sesión."] },
    { tipo: "h2", texto: "El calendario hasta la corona, con fechas" },
    { tipo: "pasos", items: ["Día 1: endodoncia y restauración provisional.", "Días 2 a 4: molestia al morder que va bajando.", "Semana 2 a 4: cita para tallar el diente y tomar la impresión o el escaneo.", "Una o dos semanas de laboratorio, con una corona provisional puesta.", "Cita de cementado: se prueba el ajuste, el color y se fija.", "Al año: radiografía de control para comprobar la cicatrización."] },
  ],

  "ortodoncia-en-6-meses-es-real": [
    { tipo: "h2", texto: "Qué se queda fuera, en concreto" },
    { tipo: "p", texto: "La ortodoncia estética rápida trabaja sobre los dientes que se ven y deja intacto el resto. Esto es lo que no toca:" },
    { tipo: "lista", items: ["La posición de los molares, que es donde se asienta la mordida.", "La relación entre la arcada de arriba y la de abajo.", "La línea media, si está desviada por un problema esquelético.", "Las rotaciones severas, que necesitan más recorrido.", "Cualquier problema de crecimiento de los maxilares."] },
    { tipo: "p", texto: "Si tu caso solo tiene un apiñamiento leve en los seis dientes de delante y la mordida está bien, no se está dejando fuera nada relevante. Si hay un problema de mordida, se está dejando fuera justo lo importante." },
    { tipo: "h2", texto: "El riesgo que no se anuncia" },
    { tipo: "alerta", texto: "Alinear solo el sector anterior en una boca con mordida alterada puede empeorar los contactos entre dientes. El resultado se ve bien en la foto y funciona peor al masticar: desgaste desigual, sobrecarga de algunas piezas y, en algunos casos, molestias en la articulación. Es un riesgo real y se evita con un diagnóstico completo antes de empezar." },
    { tipo: "h2", texto: "Cuándo sí es la decisión correcta" },
    { tipo: "p", texto: "Hay escenarios donde un tratamiento corto es exactamente lo que se necesita y gastar en uno completo sería excesivo." },
    { tipo: "lista", items: ["Recaída leve de una ortodoncia terminada hace años, con la mordida intacta.", "Un solo diente girado que molesta estéticamente.", "Diastema pequeño entre los incisivos centrales.", "Preparación estética previa a carillas o coronas.", "Paciente adulto que solo quiere resolver lo visible y lo decide informado."] },
    { tipo: "p", texto: "La clave está en esa última palabra: informado. Un tratamiento corto elegido sabiendo qué no resuelve es una decisión válida. Elegido creyendo que resuelve todo, no." },
  ],

  "cuanto-tardan-en-moverse-los-dientes": [
    { tipo: "h2", texto: "Qué movimientos son rápidos y cuáles lentos" },
    { tipo: "p", texto: "No todos los dientes se mueven igual ni en todas las direcciones. Esto explica por qué un caso que parece simple puede tardar más que otro aparatoso." },
    { tipo: "tabla", encabezados: ["Movimiento", "Dificultad", "Velocidad"], filas: [["Inclinar la corona", "Baja", "Rápido"], ["Rotar un diente", "Media", "Medio"], ["Desplazar en bloque", "Alta", "Lento"], ["Extruir, sacarlo", "Media", "Medio"], ["Intruir, meterlo", "Muy alta", "Muy lento"], ["Enderezar la raíz", "Alta", "Lento"]] },
    { tipo: "p", texto: "Un incisivo con una raíz cónica se mueve con más facilidad que un molar con tres raíces ancladas. Por eso la fase final, que es casi toda de enderezar raíces, se siente tan lenta: es el movimiento más costoso." },
    { tipo: "h2", texto: "Lo que hace el hueso mientras tanto" },
    { tipo: "p", texto: "Del lado hacia el que empuja el diente, unas células llamadas osteoclastos reabsorben hueso. Del lado contrario, los osteoblastos forman hueso nuevo. El diente no se mueve a través del hueso: el hueso se reconstruye a su alrededor." },
    { tipo: "p", texto: "Ese proceso necesita tiempo y riego sanguíneo. Si la fuerza es excesiva, el ligamento se comprime hasta cortar el riego y el proceso se detiene o, peor, se reabsorbe la punta de la raíz. Es la razón técnica por la que no se puede acelerar a base de apretar." },
    { tipo: "h2", texto: "Lo que sí puedes hacer tú" },
    { tipo: "lista", items: ["No faltar a las citas: cada ajuste perdido son semanas sin movimiento programado.", "Usar las ligas intermaxilares como te las indicaron, no a medias.", "Cuidar las encías: el diente no se mueve bien en un terreno inflamado.", "Evitar la dieta dura: cada bracket despegado detiene ese diente.", "Avisar pronto si algo se rompe, en vez de esperar a la cita."] },
  ],
};
