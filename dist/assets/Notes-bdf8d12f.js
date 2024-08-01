import{u as I,r as l,s as O,a as G,b as e,j as r,P as q,D,S as z}from"./index-31787f72.js";import{Y as d,y as p}from"./transition-d5587f5d.js";import"./keyboard-050590e4.js";import"./open-closed-7978f953.js";import"./hidden-2f89a8f0.js";const X=()=>{const H=I();l.useEffect(()=>{H(O("Notes"))});const[n,J]=l.useState([{id:1,user:"Max Smith",thumb:"profile-16.jpeg",title:"Meeting with Kelly",description:"Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.",date:"11/01/2020",isFav:!1,tag:"personal"},{id:2,user:"John Doe",thumb:"profile-14.jpeg",title:"Receive Package",description:"Facilisis curabitur facilisis vel elit sed dapibus sodales purus.",date:"11/02/2020",isFav:!0,tag:""},{id:3,user:"Kia Jain",thumb:"profile-15.jpeg",title:"Download Docs",description:"Proin a dui malesuada, laoreet mi vel, imperdiet diam quam laoreet.",date:"11/04/2020",isFav:!1,tag:"work"},{id:4,user:"Max Smith",thumb:"profile-16.jpeg",title:"Meeting at 4:50pm",description:"Excepteur sint occaecat cupidatat non proident, anim id est laborum.",date:"11/08/2020",isFav:!1,tag:""},{id:5,user:"Karena Courtliff",thumb:"profile-17.jpeg",title:"Backup Files EOD",description:"Maecenas condimentum neque mollis, egestas leo ut, gravida.",date:"11/09/2020",isFav:!1,tag:""},{id:6,user:"Max Smith",thumb:"profile-16.jpeg",title:"Download Server Logs",description:"Suspendisse efficitur diam quis gravida. Nunc molestie est eros.",date:"11/09/2020",isFav:!1,tag:"social"},{id:7,user:"Vladamir Koschek",thumb:"",title:"Team meet at Starbucks",description:"Etiam a odio eget enim aliquet laoreet lobortis sed ornare nibh.",date:"11/10/2020",isFav:!1,tag:""},{id:8,user:"Max Smith",thumb:"profile-16.jpeg",title:"Create new users Profile",description:"Duis aute irure in nulla pariatur. Etiam a odio eget enim aliquet.",date:"11/11/2020",isFav:!1,tag:"important"},{id:9,user:"Robert Garcia",thumb:"profile-21.jpeg",title:"Create a compost pile",description:"Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.",date:"11/12/2020",isFav:!0,tag:""},{id:10,user:"Marie Hamilton",thumb:"profile-2.jpeg",title:"Take a hike at a local park",description:"De carne lumbering animata corpora quaeritis. Summus brains sit",date:"11/13/2020",isFav:!0,tag:""},{id:11,user:"Megan Meyers",thumb:"profile-1.jpeg",title:"Take a class at local community center that interests you",description:"Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.",date:"11/13/2020",isFav:!1,tag:""},{id:12,user:"Angela Hull",thumb:"profile-22.jpeg",title:"Research a topic interested in",description:"Lemon drops tootsie roll marshmallow halvah carrot cake.",date:"11/14/2020",isFav:!1,tag:""},{id:13,user:"Karen Wolf",thumb:"profile-23.jpeg",title:"Plan a trip to another country",description:"Space, the final frontier. These are the voyages of the Starship Enterprise.",date:"11/16/2020",isFav:!0,tag:""},{id:14,user:"Jasmine Barnes",thumb:"profile-1.jpeg",title:"Improve touch typing",description:"Well, the way they make shows is, they make one show.",date:"11/16/2020",isFav:!1,tag:""},{id:15,user:"Thomas Cox",thumb:"profile-11.jpeg",title:"Learn Express.js",description:"Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/17/2020",isFav:!1,tag:"work"},{id:16,user:"Marcus Jones",thumb:"profile-12.jpeg",title:"Learn calligraphy",description:"Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/17/2020",isFav:!1,tag:""},{id:17,user:"Matthew Gray",thumb:"profile-24.jpeg",title:"Have a photo session with some friends",description:"Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/18/2020",isFav:!1,tag:"important"},{id:18,user:"Chad Davis",thumb:"profile-31.jpeg",title:"Go to the gym",description:"Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/18/2020",isFav:!1,tag:""},{id:19,user:"Linda Drake",thumb:"profile-23.jpeg",title:"Make own LEGO creation",description:"Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"11/18/2020",isFav:!1,tag:"social"},{id:20,user:"Kathleen Flores",thumb:"profile-34.jpeg",title:"Take cat on a walk",description:"Baseball ipsum dolor sit amet cellar rubber win hack tossed. ",date:"11/18/2020",isFav:!1,tag:"personal"}]),M={id:null,title:"",description:"",tag:"",user:"",thumb:""},[i,f]=l.useState(JSON.parse(JSON.stringify(M))),[F,u]=l.useState(!1),[W,g]=l.useState(!1),[w,k]=l.useState(!1),[j,b]=l.useState(!1),[C,v]=l.useState([]),[o,Z]=l.useState("all"),[K,$]=l.useState(null),c=()=>{v(o!=="fav"?o!=="all"||o==="delete"?n.filter(t=>t.tag===o):n:n.filter(t=>t.isFav))},P=()=>{if(!i.title)return L("Title is required.","error"),!1;if(i.id){let t=n.find(a=>a.id===i.id);t.title=i.title,t.user=i.user,t.description=i.description,t.tag=i.tag}else{let t=n.reduce((m,N)=>N.id>m?N.id:m,n[0].id);t||(t=0);let a=new Date,s={id:t+1,title:i.title,user:i.user,thumb:"profile-21.jpeg",description:i.description,date:a.getDate()+"/"+Number(a.getMonth())+1+"/"+a.getFullYear(),isFav:!1,tag:i.tag};n.splice(0,0,s),c()}L("Note has been saved successfully."),u(!1),c()},h=t=>{Z(t),k(!1),c()},E=t=>{let a=C,s=a.find(m=>m.id===t.id);s.isFav=!s.isFav,v([...a]),(o!=="all"||o==="delete")&&c()},x=(t,a="")=>{let s=C,m=C.find(N=>N.id===t.id);m.tag=a,v([...s]),(o!=="all"||o==="delete")&&c()},y=t=>{const{value:a,id:s}=t.target;f({...i,[s]:a})},S=t=>{$(t),g(!0)},A=t=>{f(t),b(!0)},B=(t=null)=>{k(!1);const a=JSON.parse(JSON.stringify(M));if(f(a),t){let s=JSON.parse(JSON.stringify(t));f(s)}u(!0)},V=()=>{J(n.filter(t=>t.id!==K.id)),c(),L("Note has been deleted successfully."),g(!1)},L=(t="",a="success")=>{z.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:a,title:t,padding:"10px 20px"})};l.useEffect(()=>{c()},[o,n]);const T=G(t=>t.themeConfig.rtlClass)==="rtl";return e("div",{children:r("div",{className:"flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full",children:[e("div",{className:`bg-black/60 z-10 w-full h-full rounded-md absolute hidden ${w?"!block xl:!hidden":""}`,onClick:()=>k(!w)}),r("div",{className:`panel
                    p-4
                    flex-none
                    w-[240px]
                    absolute
                    xl:relative
                    z-10
                    space-y-4
                    h-full
                    xl:h-auto
                    hidden
                    xl:block
                    ltr:lg:rounded-r-md ltr:rounded-r-none
                    rtl:lg:rounded-l-md rtl:rounded-l-none
                    overflow-hidden ${w?"!block h-full ltr:left-0 rtl:right-0":"hidden shadow"}`,children:[r("div",{className:"flex flex-col h-full pb-16",children:[r("div",{className:"flex text-center items-center",children:[e("div",{className:"shrink-0",children:r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",children:[e("path",{d:"M20.3116 12.6473L20.8293 10.7154C21.4335 8.46034 21.7356 7.3328 21.5081 6.35703C21.3285 5.58657 20.9244 4.88668 20.347 4.34587C19.6157 3.66095 18.4881 3.35883 16.2331 2.75458C13.978 2.15033 12.8504 1.84821 11.8747 2.07573C11.1042 2.25537 10.4043 2.65945 9.86351 3.23687C9.27709 3.86298 8.97128 4.77957 8.51621 6.44561C8.43979 6.7254 8.35915 7.02633 8.27227 7.35057L8.27222 7.35077L7.75458 9.28263C7.15033 11.5377 6.84821 12.6652 7.07573 13.641C7.25537 14.4115 7.65945 15.1114 8.23687 15.6522C8.96815 16.3371 10.0957 16.6392 12.3508 17.2435L12.3508 17.2435C14.3834 17.7881 15.4999 18.0873 16.415 17.9744C16.5152 17.9621 16.6129 17.9448 16.7092 17.9223C17.4796 17.7427 18.1795 17.3386 18.7203 16.7612C19.4052 16.0299 19.7074 14.9024 20.3116 12.6473Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M16.415 17.9741C16.2065 18.6126 15.8399 19.1902 15.347 19.6519C14.6157 20.3368 13.4881 20.6389 11.2331 21.2432C8.97798 21.8474 7.85044 22.1495 6.87466 21.922C6.10421 21.7424 5.40432 21.3383 4.86351 20.7609C4.17859 20.0296 3.87647 18.9021 3.27222 16.647L2.75458 14.7151C2.15033 12.46 1.84821 11.3325 2.07573 10.3567C2.25537 9.58627 2.65945 8.88638 3.23687 8.34557C3.96815 7.66065 5.09569 7.35853 7.35077 6.75428C7.77741 6.63996 8.16368 6.53646 8.51621 6.44531",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M11.7769 10L16.6065 11.2941",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M11 12.8975L13.8978 13.6739",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("h3",{className:"text-lg font-semibold ltr:ml-3 rtl:mr-3",children:"Notes"})]}),e("div",{className:"h-px w-full border-b border-white-light dark:border-[#1b2e4b] my-4"}),e(q,{className:"relative ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-full grow",children:r("div",{className:"space-y-1",children:[e("button",{type:"button",className:`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${o==="all"&&"bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]"}`,onClick:()=>h("all"),children:r("div",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 shrink-0",children:[e("path",{d:"M18.18 8.03933L18.6435 7.57589C19.4113 6.80804 20.6563 6.80804 21.4241 7.57589C22.192 8.34374 22.192 9.58868 21.4241 10.3565L20.9607 10.82M18.18 8.03933C18.18 8.03933 18.238 9.02414 19.1069 9.89309C19.9759 10.762 20.9607 10.82 20.9607 10.82M18.18 8.03933L13.9194 12.2999C13.6308 12.5885 13.4865 12.7328 13.3624 12.8919C13.2161 13.0796 13.0906 13.2827 12.9882 13.4975C12.9014 13.6797 12.8368 13.8732 12.7078 14.2604L12.2946 15.5L12.1609 15.901M20.9607 10.82L16.7001 15.0806C16.4115 15.3692 16.2672 15.5135 16.1081 15.6376C15.9204 15.7839 15.7173 15.9094 15.5025 16.0118C15.3203 16.0986 15.1268 16.1632 14.7396 16.2922L13.5 16.7054L13.099 16.8391M13.099 16.8391L12.6979 16.9728C12.5074 17.0363 12.2973 16.9867 12.1553 16.8447C12.0133 16.7027 11.9637 16.4926 12.0272 16.3021L12.1609 15.901M13.099 16.8391L12.1609 15.901",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M8 13H10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M8 9H14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M8 17H9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z",stroke:"currentColor",strokeWidth:"1.5"})]}),e("div",{className:"ltr:ml-3 rtl:mr-3",children:"All Notes"})]})}),e("button",{type:"button",className:`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${o==="fav"&&"bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]"}`,onClick:()=>h("fav"),children:r("div",{className:"flex items-center",children:[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:" shrink-0",children:e("path",{d:"M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z",stroke:"currentColor",strokeWidth:"1.5"})}),e("div",{className:"ltr:ml-3 rtl:mr-3",children:"Favourites"})]})}),e("div",{className:"h-px w-full border-b border-white-light dark:border-[#1b2e4b]"}),e("div",{className:"px-1 py-3 text-white-dark",children:"Tags"}),r("button",{type:"button",className:`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-primary ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${o==="personal"&&"ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]"}`,onClick:()=>h("personal"),children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 rotate-45 fill-primary shrink-0",children:e("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"currentColor",strokeWidth:"1.5"})}),e("div",{className:"ltr:ml-3 rtl:mr-3",children:"Personal"})]}),r("button",{type:"button",className:`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-warning ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${o==="work"&&"ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]"}`,onClick:()=>h("work"),children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 rotate-45 fill-warning shrink-0",children:e("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"currentColor",strokeWidth:"1.5"})}),e("div",{className:"ltr:ml-3 rtl:mr-3",children:"Work"})]}),r("button",{type:"button",className:`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-info ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${o==="social"&&"ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]"}`,onClick:()=>h("social"),children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 rotate-45 fill-info shrink-0",children:e("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"currentColor",strokeWidth:"1.5"})}),e("div",{className:"ltr:ml-3 rtl:mr-3",children:"Social"})]}),r("button",{type:"button",className:`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-danger ltr:hover:pl-3 rtl:hover:pr-3 duration-300 ${o==="important"&&"ltr:pl-3 rtl:pr-3 bg-gray-100 dark:bg-[#181F32]"}`,onClick:()=>h("important"),children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 rotate-45 fill-danger shrink-0",children:e("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"currentColor",strokeWidth:"1.5"})}),e("div",{className:"ltr:ml-3 rtl:mr-3",children:"Important"})]})]})})]}),e("div",{className:"ltr:left-0 rtl:right-0 absolute bottom-0 p-4 w-full",children:r("button",{className:"btn btn-primary w-full",type:"button",onClick:()=>B(),children:[r("svg",{className:"w-5 h-5 ltr:mr-2 rtl:ml-2 shrink-0",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add New Note"]})})]}),r("div",{className:"panel flex-1 overflow-auto h-full",children:[e("div",{className:"pb-5",children:e("button",{type:"button",className:"xl:hidden hover:text-primary",onClick:()=>k(!w),children:r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M20 7L4 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M20 12L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M20 17L4 17",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})}),C.length?e("div",{className:"sm:min-h-[300px] min-h-[400px]",children:e("div",{className:"grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5",children:C.map(t=>r("div",{className:`panel pb-12 ${t.tag==="personal"?"bg-primary-light shadow-primary":t.tag==="work"?"bg-warning-light shadow-warning":t.tag==="social"?"bg-info-light shadow-info":t.tag==="important"?"bg-danger-light shadow-danger":"dark:shadow-dark"}`,children:[r("div",{className:"min-h-[142px]",children:[r("div",{className:"flex justify-between",children:[r("div",{className:"flex items-center w-max",children:[r("div",{className:"flex-none",children:[t.thumb&&e("div",{className:"p-0.5 bg-gray-300 dark:bg-gray-700 rounded-full",children:e("img",{className:"h-8 w-8 rounded-full object-cover",alt:"img",src:`/assets/images/${t.thumb}`})}),!t.thumb&&t.user&&e("div",{className:"grid place-content-center h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 text-sm font-semibold",children:t.user.charAt(0)+""+t.user.charAt(t.user.indexOf("")+1)}),!t.thumb&&!t.user&&e("div",{className:"bg-gray-300 dark:bg-gray-700 rounded-full p-2",children:r("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]})})]}),r("div",{className:"ltr:ml-2 rtl:mr-2",children:[e("div",{className:"font-semibold",children:t.user}),e("div",{className:"text-sx text-white-dark",children:t.date})]})]}),e("div",{className:"dropdown",children:e(D,{offset:[0,5],placement:`${T?"bottom-start":"bottom-end"}`,btnClassName:"text-primary",button:r("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rotate-90 opacity-70",children:[e("circle",{cx:"5",cy:"12",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),e("circle",{opacity:"0.5",cx:"12",cy:"12",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),e("circle",{cx:"19",cy:"12",r:"2",stroke:"currentColor",strokeWidth:"1.5"})]}),children:r("ul",{className:"text-sm font-medium",children:[e("li",{children:r("button",{type:"button",onClick:()=>B(t),children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 ltr:mr-3 rtl:ml-3 shrink-0",children:[e("path",{d:"M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015",stroke:"currentColor",strokeWidth:"1.5"})]}),"Edit"]})}),e("li",{children:r("button",{type:"button",onClick:()=>S(t),children:[r("svg",{className:"ltr:mr-3 rtl:ml-3 shrink-0",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Delete"]})}),e("li",{children:r("button",{type:"button",onClick:()=>A(t),children:[r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ltr:mr-3 rtl:ml-3 shrink-0",children:[e("path",{opacity:"0.5",d:"M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",stroke:"currentColor",strokeWidth:"1.5"})]}),"View"]})})]})})})]}),r("div",{children:[e("h4",{className:"font-semibold mt-4",children:t.title}),e("p",{className:"text-white-dark mt-2",children:t.description})]})]}),e("div",{className:"absolute bottom-5 left-0 w-full px-5",children:r("div",{className:"flex items-center justify-between mt-2",children:[e("div",{className:"dropdown",children:e("div",{className:"dropdown",children:e(D,{offset:[0,5],placement:`${T?"bottom-end":"bottom-start"}`,btnClassName:`${t.tag==="personal"?"text-primary":t.tag==="work"?"text-warning":t.tag==="social"?"text-info":t.tag==="important"?"text-danger":""}`,button:e("span",{children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`w-3 h-3 rotate-45 ${t.tag==="personal"?"fill-primary":t.tag==="work"?"fill-warning":t.tag==="social"?"fill-info":t.tag==="important"?"fill-danger":""}`,children:e("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"currentColor",strokeWidth:"1.5"})})}),children:r("ul",{className:"text-sm font-medium",children:[e("li",{children:r("button",{type:"button",onClick:()=>x(t,"personal"),children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 rotate-45 ltr:mr-2 rtl:ml-2 fill-primary",children:e("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"none",strokeWidth:"1.5"})}),"Personal"]})}),e("li",{children:r("button",{type:"button",onClick:()=>x(t,"work"),children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 rotate-45 ltr:mr-2 rtl:ml-2 fill-warning",children:e("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"none",strokeWidth:"1.5"})}),"Work"]})}),e("li",{children:r("button",{type:"button",onClick:()=>x(t,"social"),children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 rotate-45 ltr:mr-2 rtl:ml-2 fill-info",children:e("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"none",strokeWidth:"1.5"})}),"Social"]})}),e("li",{children:r("button",{type:"button",onClick:()=>x(t,"important"),children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 rotate-45 ltr:mr-2 rtl:ml-2 fill-danger",children:e("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"none",strokeWidth:"1.5"})}),"Important"]})})]})})})}),r("div",{className:"flex items-center",children:[e("button",{type:"button",className:"text-danger",onClick:()=>S(t),children:r("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("button",{type:"button",className:"text-warning group ltr:ml-2 rtl:mr-2",onClick:()=>E(t),children:e("svg",{className:`w-4.5 h-4.5 group-hover:fill-warning ${t.isFav?"fill-warning":""}`,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z",stroke:"currentColor",strokeWidth:"1.5"})})})]})]})})]},t.id))})}):e("div",{className:"flex justify-center items-center sm:min-h-[300px] min-h-[400px] font-semibold text-lg h-full",children:"No data available"}),e(d,{appear:!0,show:F,as:l.Fragment,children:r(p,{as:"div",open:F,onClose:()=>u(!1),className:"relative z-[51]",children:[e(d.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-[black]/60"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center px-4 py-8",children:e(d.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:r(p.Panel,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e("button",{type:"button",onClick:()=>u(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),e("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:i.id?"Edit Note":"Add Note"}),e("div",{className:"p-5",children:r("form",{children:[r("div",{className:"mb-5",children:[e("label",{htmlFor:"title",children:"Title"}),e("input",{id:"title",type:"text",placeholder:"Enter Title",className:"form-input",value:i.title,onChange:t=>y(t)})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"name",children:"User Name"}),r("select",{id:"user",className:"form-select",value:i.user,onChange:t=>y(t),children:[e("option",{value:"",children:"Select User"}),e("option",{value:"Max Smith",children:"Max Smith"}),e("option",{value:"John Doe",children:"John Doe"}),e("option",{value:"Kia Jain",children:"Kia Jain"}),e("option",{value:"Karena Courtliff",children:"Karena Courtliff"}),e("option",{value:"Vladamir Koschek",children:"Vladamir Koschek"}),e("option",{value:"Robert Garcia",children:"Robert Garcia"}),e("option",{value:"Marie Hamilton",children:"Marie Hamilton"}),e("option",{value:"Megan Meyers",children:"Megan Meyers"}),e("option",{value:"Angela Hull",children:"Angela Hull"}),e("option",{value:"Karen Wolf",children:"Karen Wolf"}),e("option",{value:"Jasmine Barnes",children:"Jasmine Barnes"}),e("option",{value:"Thomas Cox",children:"Thomas Cox"}),e("option",{value:"Marcus Jones",children:"Marcus Jones"}),e("option",{value:"Matthew Gray",children:"Matthew Gray"}),e("option",{value:"Chad Davis",children:"Chad Davis"}),e("option",{value:"Linda Drake",children:"Linda Drake"}),e("option",{value:"Kathleen Flores",children:"Kathleen Flores"})]})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"tag",children:"Tag"}),r("select",{id:"tag",className:"form-select",value:i.tag,onChange:t=>y(t),children:[e("option",{value:"",children:"None"}),e("option",{value:"personal",children:"Personal"}),e("option",{value:"work",children:"Work"}),e("option",{value:"social",children:"Social"}),e("option",{value:"important",children:"Important"})]})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"desc",children:"Description"}),e("textarea",{id:"description",rows:3,className:"form-textarea resize-none min-h-[130px]",placeholder:"Enter Description",value:i.description,onChange:t=>y(t)})]}),r("div",{className:"flex justify-end items-center mt-8",children:[e("button",{type:"button",className:"btn btn-outline-danger gap-2",onClick:()=>u(!1),children:"Cancel"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:P,children:i.id?"Update Note":"Add Note"})]})]})})]})})})})]})}),e(d,{appear:!0,show:W,as:l.Fragment,children:r(p,{as:"div",open:W,onClose:()=>g(!1),className:"relative z-[51]",children:[e(d.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-[black]/60"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center px-4 py-8",children:e(d.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:r(p.Panel,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e("button",{type:"button",onClick:()=>g(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),e("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:"Delete Notes"}),r("div",{className:"p-5 text-center",children:[e("div",{className:"text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto",children:r("svg",{className:"mx-auto",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("div",{className:"sm:w-3/4 mx-auto mt-5",children:"Are you sure you want to delete Notes?"}),r("div",{className:"flex justify-center items-center mt-8",children:[e("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>g(!1),children:"Cancel"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:V,children:"Delete"})]})]})]})})})})]})}),e(d,{appear:!0,show:j,as:l.Fragment,children:r(p,{as:"div",open:j,onClose:()=>b(!1),className:"relative z-[51]",children:[e(d.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-[black]/60"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center px-4 py-8",children:e(d.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:r(p.Panel,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e("button",{type:"button",onClick:()=>b(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),r("div",{className:"flex items-center flex-wrap gap-2 text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:[e("div",{className:"ltr:mr-3 rtl:ml-3",children:i.title}),i.tag&&e("button",{type:"button",className:`badge badge-outline-primary rounded-3xl capitalize ltr:mr-3 rtl:ml-3 ${i.tag,i.tag,i.tag,i.tag==="important"&&"shadow-danger"}`,children:i.tag}),i.isFav&&e("button",{type:"button",className:"text-warning",children:e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-warning",children:e("path",{d:"M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z",stroke:"currentColor",strokeWidth:"1.5"})})})]}),r("div",{className:"p-5",children:[e("div",{className:"text-base",children:i.description}),e("div",{className:"ltr:text-right rtl:text-left mt-8",children:e("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>b(!1),children:"Close"})})]})]})})})})]})})]})]})})};export{X as default};
