import React, { memo } from 'react';
import {
  ToastContainer as BaseToastContainer,
  ToastContainerProps,
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

const ToastContainer = (props: ToastContainerProps) => (
  <BaseToastContainer limit={5} newestOnTop theme="colored" {...props} />
);

export default memo(ToastContainer);
