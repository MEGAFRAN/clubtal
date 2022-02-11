


const Button = ({title, backgroundColor, handleClick, fontSize}: any) =>
(

    <div className="button_container">

      <button onClick={handleClick} 
      style={{backgroundColor: backgroundColor, fontSize: fontSize}}
      >

        {title}

      </button>  

    </div>

)

Button.defaultProps = 
{ 
  title: "test title"
}

export default Button