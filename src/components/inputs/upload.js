import React, { Fragment, useReducer, useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export default ({ handleChange, type, disabled, limit, value, fileList })=> {
  const [state, setState] = useReducer((current, next) => ({ ...current, ...next }), {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
  });

  const handleCancel = () => setState({ previewVisible: false });

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const onChange = ({ fileList }) => {
    //console.log(fileList);
    //setState({ fileList: fileList.map(item => { item.status = "done"; return item }) });
    //const urls = fileList.map(item => item.originFileObj);
    handleChange({ [value]: fileList.map(item => { item.status = "done"; return item }) });
  };

  const { previewVisible, previewImage, previewTitle } = state;

  return(
    <Fragment>
        <Upload
          //action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={onChange}
          disabled={disabled}
        >
          {
            fileList.length >= limit
            ? null 
            : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Agregar <br /> {type}</div>
            </div>              
            )
          }
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>      
    </Fragment>
  )
}