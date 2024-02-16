export const validatePhoneNumber = (_, value) => {
  const phoneRegex = /^[0-9]{10}$/;
  if (!value) {
    return Promise.reject("Vui lòng không bỏ trống");
  }

  if (!phoneRegex.test(value)) {
    return Promise.reject("Vui lòng nhập đúng định dạng!");
  }

  return Promise.resolve();
};
