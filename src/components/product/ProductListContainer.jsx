import Recetas from "../misRecetas";
import ProductDetail from "./ProductDetail";

const productos =  [
    { id: 1, tipo: 'imagen',titulo: 'Super picada:', ubicacion:'../img/content/picada.png', alt:'Imágen que presenta una tabla de picada con diferentes tipos de fiambres. ',descripcion: '@Yo El momento ideal para desconectarse es cuando llegan los amigos a casa, y una picada es el condimento indispensable para una juntada increíble. Pero hay que prepararlo con tiempo para que en la mesa no falte este rico.',tema: '#picada #fiambre #quesos', megusta: 125 },

    {id: 2,tipo: 'imagen',titulo: 'Panes de Molde:',ubicacion: '../img/content/panes2.png', alt: 'Imágen que presenta unos panes de molde.', descripcion: '@Yo Uno de los grandes placeres en la cocina que estoy descubriendo desde hace un tiempo es el de preparar tus masas caseras, para todo tipo de preparaciones. Tal es mi afición que en la sección de masas', tema: '#pancasero #masamadre',megusta: 198},
   
    {id: 3,tipo: 'imagen',titulo: 'Mandarina Pie: ',ubicacion: '../img/content/tortamandarina.png ',alt: 'Imágen que presenta una Torta de Mandarinas glaseada. ',descripcion: '@Yo ¿Es época de mandarinas y tienes una licuadora cerca? A cocinar se ha dicho, si tienes estas dos cosas a mano y dos o tres ingredientes mas podes hacer una super torta de mandarina en licuadora. Hoy te ',tema: '#mandarina #torta ', megusta: 230 },

    {id: 4,tipo: 'imagen',titulo: 'Pan Dulce: ',ubicacion: '../img/content/pandulce.png',alt: 'Imágen que presenta unos panes dulces.',descripcion: '@Yo No van a poder creer lo que son estos mini pan dulce! Receta de pan dulce en formato mini y de esfuerzo mini! Porque éste pan dulce se hace en media hora. Hoy vamos a aprender a cocinar un pan dulce rico, con muchas frutas',tema: '#pandulce #navidad', megusta: 361},
    
    {id: 5, tipo: 'imagen',titulo: 'Focaccia:',ubicacion: '../img/content/focaccia.png',alt: 'Imágen que presenta una Focaccia Italiana. ',descripcion: '@Yo Me puse a leer un poquito acerca de su historia, donde surgió exactamente y encontré un montón de versiones… Resulta que sí, los italianos reclamaron su autoría en la receta dado que este tipo de pan saborizado tan particular ',tema: '#focaccia #italia',megusta: 500 },
    
    {id: 6, tipo: 'imagen',titulo: 'Carne al horno:', ubicacion: '../img/content/carnemechada.png',alt: 'Imágen que presenta Carne mechada con papas al horno. ',descripcion: '@Yo El plato estrella a la hora de hablar de recetas económicas y ricas. Encima es facilísima, no pueden pedir nada más. Lo ideal, y para que este pan de carne sea mucho más rico,sería que tengas El plato estrella a la hora de hablar de',tema: '#carne #carnehorno ',megusta: 421 },
   
    {id: 7,tipo: 'imagen',titulo: 'Baklava: ',ubicacion: '../img/content/baklava.png ',alt: 'Imágen que presenta una postre turco llamado Baklava. ',descripcion: '@Yo Baklava es un pastel elaborado con una pasta de  pistachos o nueces trituradas, distribuida en una masa filo y bañado en almíbar o jarabe de miel. Existen diversas variedades que incorporan avellanas y almendras',tema: '#baklava #postreturco' , megusta: 548 },

    {id: 8, tipo: 'imagen',titulo: 'Torta de Chocolate',ubicacion: '../img/content/t3chkinder.jpg ',alt: 'Imágen que presenta una torta de Chocolate. ',descripcion: '@Yo Un simple bizcochuelo ya no es suficiente una vez que conozcas esta esponjosa torta de Kinder Bueno. Batir los huevos con el azúcar, añadir la harina, la levadura en polvo y la vainilla, a',tema: '#torta #kinder ',megusta: 256 }
]

const ProductListContainer = () => {
 return(
   <div>Hola</div>
 )}         
    export default ProductListContainer;
