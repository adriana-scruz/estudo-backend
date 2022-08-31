const sanSenha = (req, res, next) => {
  const { pwd } = req.body;
  const validate = {};
  const MIN_RULES = 4;

  pwd.split("").forEach((elem) => {
    const charCode = elem.charCodeAt();

    if (charCode >= 65 && charCode <= 90) {
      validate.upperCase = true;
    }

    if (charCode >= 97 && charCode <= 122) {
      validate.lowerCase = true;
    }

    if (charCode >= 48 && charCode <= 57) {
      validate.number = true;
    }

    if (
      (charCode >= 32 && charCode <= 47) ||
      (charCode >= 58 && charCode <= 64) ||
      (charCode >= 91 && charCode <= 96)
    ) {
      validate.special = true;
    }
  });

  console.log(validate);

  if (Object.keys(validate).length === MIN_RULES) {
    next();
  } else {
    res.status(404).json({ message: "Senha insegura" });
  }
};

module.exports = sanSenha;
