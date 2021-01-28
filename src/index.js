import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';




const MadiaCard = ({profile, title, body, imageUrl}) => {
  return <div className={"body"}>
    
    <h1> <img className={"profile-pic"} src={profile} alt="profile"/> {title}</h1>
    <p> {body}</p>
    <img className={"post-image"} src={imageUrl} alt="fbpostpic"/>
  </div>
}

ReactDOM.render(
  <div>
    <MadiaCard
    profile="https://scontent.fkhi12-1.fna.fbcdn.net/v/t1.0-9/27332383_1479384265443534_5771716595031240578_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_eui2=AeGdDID8RdkbzZHgYgNiKIetgUI_ssXoavyBQj-yxehq_LgM4Fbs3kMWA-ciRMpOito-L3BQjAr_mmousC-1B53h&_nc_ohc=peZ_XQYdPYEAX8REKzC&_nc_ht=scontent.fkhi12-1.fna&oh=f49b81db664e7971df1774b93c56da77&oe=6036C095"
    title=" Mohammad Ahmed"
    body="Most Beauityful And Very PeaceFul Place In the World Makka Mukarrama And Madina Munavvarah"
    imageUrl ="https://cdn.siasat.com/wp-content/uploads/2020/02/Makkah-Madina.jpg"
    />
    <MadiaCard
    profile="https://scontent.fkhi12-1.fna.fbcdn.net/v/t1.0-9/22789063_1397261463655815_5344108611555825128_n.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeE6JICxosbQV5nA3KaaT7tDjNUcgusXQFqM1RyC6xdAWhox964Yn7OK3fAkGv4yVZ2QWz7sdQntIhUzcZ8-L4mO&_nc_ohc=IqBvmCPsMu4AX9dIHRJ&_nc_ht=scontent.fkhi12-1.fna&oh=4bc0902ed9f46b49a3825d82dba79649&oe=60371058"
    title="Mohammad Ahmed"
    body="Makka Mukarrama Masjid Ul Haram"
    imageUrl ="https://umrah-alamanah.com/images-new/content_img1-new.jpg"
    />
    <MadiaCard
    profile="https://scontent.fkhi12-1.fna.fbcdn.net/v/t1.0-9/18767470_1276161732432456_1661787695697676117_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_eui2=AeHSimkDOD-max92rUi1cEYoBcFC-GfzBFkFwUL4Z_MEWQ40z9-VC5cde2FbMRaprjJ9ghg5m9IyRTFOMZKKLc6P&_nc_ohc=urSNWBLSxwUAX-v824f&_nc_ht=scontent.fkhi12-1.fna&oh=aeb8073ecdbf34d876b882697232e7ce&oe=60387AFE"
    title="Mohammad Ahmed"
    body="Madina Munavvarah Most PeaceFul Place in The world"
    imageUrl ="https://i.ytimg.com/vi/MHB7b_6bJXA/hqdefault.jpg"
    />
  </div>,
    document.getElementById("root")
);
///////////////////////////////////////MY OWn//////////////////////////////////////////////////
// const MediaCard = (title, imageUrl, body)=>{
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{body}</p>
//       <img src={imageUrl} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <div>
//     <MediaCard
//       title="Mohammad Ahmed Khan"
//       imageUrl="https://scontent.fkhi12-1.fna.fbcdn.net/v/t1.0-9/27332383_1479384265443534_5771716595031240578_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_eui2=AeGdDID8RdkbzZHgYgNiKIetgUI_ssXoavyBQj-yxehq_LgM4Fbs3kMWA-ciRMpOito-L3BQjAr_mmousC-1B53h&_nc_ohc=peZ_XQYdPYEAX8REKzC&_nc_ht=scontent.fkhi12-1.fna&oh=f49b81db664e7971df1774b93c56da77&oe=6036C095"
//       body="This Is An image"
//     />
//     <MediaCard
//       title="Mohammad Ahmed Khan"
//       imageUrl="https://scontent.fkhi12-1.fna.fbcdn.net/v/t1.0-9/27332383_1479384265443534_5771716595031240578_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_eui2=AeGdDID8RdkbzZHgYgNiKIetgUI_ssXoavyBQj-yxehq_LgM4Fbs3kMWA-ciRMpOito-L3BQjAr_mmousC-1B53h&_nc_ohc=peZ_XQYdPYEAX8REKzC&_nc_ht=scontent.fkhi12-1.fna&oh=f49b81db664e7971df1774b93c56da77&oe=6036C095"
//       body="This Is An image"
//     />
//     <MediaCard
//       title="Mohammad Ahmed Khan"
//       imageUrl="https://scontent.fkhi12-1.fna.fbcdn.net/v/t1.0-9/27332383_1479384265443534_5771716595031240578_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_eui2=AeGdDID8RdkbzZHgYgNiKIetgUI_ssXoavyBQj-yxehq_LgM4Fbs3kMWA-ciRMpOito-L3BQjAr_mmousC-1B53h&_nc_ohc=peZ_XQYdPYEAX8REKzC&_nc_ht=scontent.fkhi12-1.fna&oh=f49b81db664e7971df1774b93c56da77&oe=6036C095"
//       body="This Is An image"
//     />
//   </div>,
//   rootElement
// );

//////////////////////////////////////////end of my own//////////////////////////////////////////





