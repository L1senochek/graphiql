import React from 'react';
import styles from './icon-double-arrow.module.scss';

const IconDoubleArrow: React.FC = (): JSX.Element => {
  return (
    <>
      <svg
        width="256px"
        height="256px"
        className={styles['icon-double-arrow']}
        viewBox="0 0 24.00 24.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
        strokeWidth="0.00024000000000000003"
        transform="matrix(2, 0, 0, -2, 0, 0)rotate(0)"
      >
        <path
          className={styles['icon-double-arrow__path']}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5119 6.43056C11.7928 6.18981 12.2072 6.18981 12.4881 6.43056L19.4881 12.4306C19.8026 12.7001 19.839 13.1736 19.5695 13.4881C19.2999 13.8026 18.8264 13.839 18.5119 13.5694L12 7.98781L5.48811 13.5694C5.17361 13.839 4.70014 13.8026 4.43057 13.4881C4.161 13.1736 4.19743 12.7001 4.51192 12.4306L11.5119 6.43056ZM4.51192 16.4306L11.5119 10.4306C11.7928 10.1898 12.2072 10.1898 12.4881 10.4306L19.4881 16.4306C19.8026 16.7001 19.839 17.1736 19.5695 17.4881C19.2999 17.8026 18.8264 17.839 18.5119 17.5694L12 11.9878L5.48811 17.5694C5.17361 17.839 4.70014 17.8026 4.43057 17.4881C4.161 17.1736 4.19743 16.7001 4.51192 16.4306Z"
          fill="#000000"
        />
      </svg>
    </>
  );
};

export default IconDoubleArrow;
