import { useState } from 'react';
const useShow = () => {
  const [show, setShow] = useState({
    work: false,
    education: false,
    languages: false,
    project: false,
    organization: false,
    skills: false,
    certificates: false,
    interest: false,
    reference: false,
  });
  return [show, setShow];
};
export default useShow;
