export default function SuccessPage(){
    return (
        <>
        <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",top:"50%",left:"50%",transform:"translate(-50%,-10%)",flexDirection:"column"}}>
         <h1 class="text-5xl py-8 heading">   Hooray! You are successfully logged in!  </h1>
        <iframe src="https://giphy.com/embed/10UeedrT5MIfPG" title="success" width="480" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dancing-happy-cartoons-10UeedrT5MIfPG"></a></p>
        </div>
        </>
    )
}