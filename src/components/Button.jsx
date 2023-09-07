
export const Button = ({title, onClickHandler, value, borderColor, fontColor, backgroundColor = 'transparent'}) => {
  

  
  return (
    <button value={value} onClick={onClickHandler} style={{borderColor: borderColor, color: fontColor, backgroundColor:backgroundColor}}>
        {title}
    </button>
  )
}
