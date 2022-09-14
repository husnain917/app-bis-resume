import objectPath from "object-path";

export const updateObject = (obj, path, updatedValue) => {
  objectPath.set(obj, path, updatedValue);

  return obj;
};
export const insertObj = (obj, path, newObj, index_value = 0) => {
  objectPath.insert(obj, path, newObj, index_value);
  return obj;
};
export const deleteObj = (obj, path) => {
  objectPath.del(obj, path);
  return obj;
};
export const getObj = (obj, path) => {
  objectPath.get(obj, path);
  return obj;
};


