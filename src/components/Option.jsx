function Option({ optionName, imageSrc, playerPick }) {
  return (
    <div onClick={() => playerPick(optionName)} className={optionName}>
      <img src={imageSrc} alt={optionName} />
    </div>
  );
}

export default Option;
