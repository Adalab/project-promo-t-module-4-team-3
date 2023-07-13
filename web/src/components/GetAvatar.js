import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/defaultAvatar.png';
import '../stylesheets/GetAvatar.scss';

function GetAvatar({
  avatar = defaultAvatar,
  updateAvatar,
  text = 'Get avatar!',
}) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];

      fr.addEventListener('load', getImage);

      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;

    updateAvatar(image);
  };

  return (
    <label className='get-avatar__label'>
      {text}
      <input
        type='file'
        ref={myFileField}
        style={{ display: 'none' }}
        className='get-avatar__upload-field'
        onChange={uploadImage}
      />
    </label>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string,
  updateAvatar: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default GetAvatar;
