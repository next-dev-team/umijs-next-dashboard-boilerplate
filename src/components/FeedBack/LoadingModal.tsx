import { Modal, Spin } from 'antd';
import React from 'react';

export const LoadingModal = ({ isLoading }: { isLoading: boolean | undefined }) => {
  return (
    <Modal
      visible={isLoading}
      closable={false}
      footer={false}
      centered
      zIndex={9999999}
      destroyOnClose
      // maskStyle={{ backgroundColor: 'black', opacity: 1 }}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      width={110}
      bodyStyle={{
        padding: '8px 8px',
        backgroundColor: '#00000021',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Spin
        tip="Loading..."
        spinning={isLoading}
        style={{
          backgroundColor: 'transparent',
          width: '100%',
        }}
      />
    </Modal>
  );
};
