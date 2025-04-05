
export interface CatTip {
  id: number;
  title: string;
  content: string;
  category: "nutrition" | "grooming" | "health" | "play" | "behavior";
  icon: string;
}

export const catTips: CatTip[] = [
  {
    id: 1,
    title: "Agua fresca siempre",
    content: "Los gatos necesitan tener acceso a agua fresca y limpia durante todo el día. Cambia el agua al menos una vez al día y limpia su recipiente regularmente para prevenir bacterias.",
    category: "nutrition",
    icon: "💧"
  },
  {
    id: 2,
    title: "Cepillado regular",
    content: "Cepilla a tu gato regularmente para reducir la pérdida de pelo y prevenir bolas de pelo. Los gatos de pelo largo necesitan ser cepillados varias veces por semana.",
    category: "grooming",
    icon: "🧹"
  },
  {
    id: 3,
    title: "Visitas al veterinario",
    content: "Programa chequeos veterinarios anuales incluso si tu gato parece saludable. La detección temprana de problemas de salud puede salvar la vida de tu mascota.",
    category: "health",
    icon: "👨‍⚕️"
  },
  {
    id: 4,
    title: "Tiempo de juego diario",
    content: "Dedica al menos 15 minutos diarios a jugar con tu gato. Esto estimula su mente, proporciona ejercicio y fortalece vuestro vínculo.",
    category: "play",
    icon: "🎮"
  },
  {
    id: 5,
    title: "Espacio vertical",
    content: "A los gatos les encanta trepar y observar desde lo alto. Proporciona árboles para gatos, estanterías o perchas para satisfacer este instinto natural.",
    category: "behavior",
    icon: "🌳"
  },
  {
    id: 6,
    title: "Comidas pequeñas y frecuentes",
    content: "En la naturaleza, los gatos cazan múltiples presas pequeñas. Considera dividir sus comidas en varias porciones pequeñas durante el día en lugar de una o dos grandes.",
    category: "nutrition",
    icon: "🥣"
  },
  {
    id: 7,
    title: "Recorte de uñas",
    content: "Recorta las uñas de tu gato cada 2-3 semanas. Utiliza cortaúñas específicos para gatos y corta solo la punta para evitar cortar el tejido vivo.",
    category: "grooming",
    icon: "✂️"
  },
  {
    id: 8,
    title: "Vigilar cambios de comportamiento",
    content: "Los cambios repentinos en el comportamiento de tu gato pueden indicar problemas de salud. Presta atención a cambios en sus hábitos alimenticios, de uso del arenero o de sueño.",
    category: "health",
    icon: "👀"
  },
  {
    id: 9,
    title: "Rotación de juguetes",
    content: "Rota los juguetes de tu gato regularmente para mantener su interés. Guarda algunos y sácalos después de unas semanas para que parezcan nuevos.",
    category: "play",
    icon: "🧸"
  },
  {
    id: 10,
    title: "Respeta su espacio",
    content: "Los gatos necesitan lugares tranquilos donde puedan retirarse cuando se sienten estresados. Asegúrate de que tu gato tenga acceso a lugares seguros y silenciosos.",
    category: "behavior",
    icon: "🏠"
  },
  {
    id: 11,
    title: "Cuidado con las plantas",
    content: "Muchas plantas comunes son tóxicas para los gatos. Investiga antes de traer nuevas plantas a casa y mantén las tóxicas fuera del alcance de tu mascota.",
    category: "health",
    icon: "🪴"
  },
  {
    id: 12,
    title: "Limpieza de ojos",
    content: "Limpia suavemente las esquinas de los ojos de tu gato con un paño húmedo si notas acumulación. La secreción excesiva puede indicar una infección y requiere atención veterinaria.",
    category: "grooming",
    icon: "👁️"
  },
  {
    id: 13,
    title: "Hora regular de alimentación",
    content: "Alimenta a tu gato a la misma hora cada día para establecer una rutina. Esto puede ayudar a regular su digestión y comportamiento.",
    category: "nutrition",
    icon: "🕒"
  },
  {
    id: 14,
    title: "Enriquecimiento sensorial",
    content: "Los gatos disfrutan oliendo y explorando nuevos aromas. Considera plantar hierba gatera o proporcionar juguetes con catnip para estimular sus sentidos.",
    category: "play",
    icon: "👃"
  },
  {
    id: 15,
    title: "Más areneros que gatos",
    content: "La regla general es tener un arenero más que el número de gatos en tu hogar. Colócalos en diferentes lugares de la casa para fácil acceso.",
    category: "behavior",
    icon: "🚽"
  }
];
