import './Button.css'


function Button({title,bg,cl,wh,ht,br,hv,b}) {
    const styleBtn = {
        backgroundColor: bg,
        textColor:cl,
        width:wh,
        height:ht,
        borderRadius:br,
        hover:hv,
        border:b,
        color:cl,

    }

  return (
    <div className="button" style={styleBtn}>
        <a style={styleBtn} className="button__link" href="#Contacts">{title}</a>
    </div>
  )
}

export default Button