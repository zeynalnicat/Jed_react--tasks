import Footer from "../Footer";
import Header from "../Header";


function PageContainer({children}){
    return <div style={{display:"flex",flexDirection:"column"}}>
        <Header/>
        <div style={{marginTop:40}}>{children}</div>
        <Footer/>
    </div>
}
export default PageContainer