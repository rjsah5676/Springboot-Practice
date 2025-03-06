function Footer(){
    const footer={
        lineHeight:'80px',
        textAlign:'center',
        color:'white', backgroundImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, purple)'
    }
    return(
    <div>
        <h2 style={footer}>copyright @ Gunmo Lee</h2>
    </div>);
}

export default Footer;