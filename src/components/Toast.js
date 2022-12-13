import { toast } from 'react-toastify';

export const ToastSuccess = (data) => toast.success(data.CharAt(0).toUpperCase() + data.slice(1), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});