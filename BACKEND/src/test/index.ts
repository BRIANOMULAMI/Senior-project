const DateFormater = () => {
  const now = new Date(Date.now());

  const formatedDate = now.toLocaleDateString("en-US");
  console.log("now:", now);
  console.log("formatedDate:", formatedDate);
};
DateFormater();
