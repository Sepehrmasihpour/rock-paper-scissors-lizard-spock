function Option({ optionName, imageSrc, handleOptionClick }) {
  return (
    <div onClick={() => handleOptionClick(optionName)} className={optionName}>
      <img src={imageSrc} alt={optionName} />
    </div>
  );
}

export default Option;
