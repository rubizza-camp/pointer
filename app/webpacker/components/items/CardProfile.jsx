import React, { Component } from 'react'
import { axiosPatchRequest } from 'utils/axios_helper'
import PropTypes from 'prop-types'
import { DirectUpload } from 'activestorage'
import styled from 'styled-components'
import { transformItems } from '../../utils/pet_helpers'
import { Form, SaveButton, DeleteButton, EditButton, TaskButton, Card } from './PetsCards'
import { Field, Input, Label } from './ListComponents'
import Cookies from 'js-cookie'
import * as JWT from 'jwt-decode'
import List from './List'

const Edit = ({
  onSubmit,
  children,
  onDelete,
  id,
}) => (
  <Card>
    <Form encType="multipart/form-data" onSubmit={onSubmit}>
      {children}
      <SaveButton type="submit">Save</SaveButton>
      <DeleteButton type="button" onClick={onDelete} id={id}> Delete </DeleteButton>
    </Form>
  </Card>
)

Edit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,

}


const ImgWrap = styled.div`
position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;`
const ImgUploadWrap = styled(ImgWrap)`
:before{
  content: "\f093";
  font-size: 90px;
  position: absolute;
  padding-top: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #63d3a6;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  opacity: 0;
  transition: .5s ease;
  background-color: #fff;
}
:hover:before{
 opacity: 1;
}`

const Img = styled.img`
  width: auto;
  height: 100%;`


const FileInput = styled(Input)`
  display: none;`


const NameShow = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #676767;
  max-width: 220px;
  overflow-wrap: break-word;`

const BreedShow = styled.div`
    text-align: center;
  max-width: 220px;
  overflow-wrap: break-word;`

const Profile = ({
  onSubmit,
  src,
  name,
  breed,
  times,
  onCreateTask,
}) => (
  <Card>
    <Form enctype="multipart/form-data" onSubmit={onSubmit}>
      <Label className="custom-file-upload fas">
        <ImgWrap>
          <Img htmlFor="photo-upload" src={src} />
        </ImgWrap>
      </Label>
      <NameShow>
        {name}
      </NameShow>
      <BreedShow>{breed}</BreedShow>
      <Label>Times to walk</Label>
      {times.map(item => (
        <BreedShow key={item.id} text={item.text}>{item.text}</BreedShow>))}
      <EditButton type="submit">Edit Profile </EditButton>
      <TaskButton type="button" onClick={onCreateTask}>Create task</TaskButton>
    </Form>
  </Card>
)

Profile.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
  breed: PropTypes.string,
  times: PropTypes.array.isRequired,
}

Profile.defaultProps = {
  name: 'Anonimous doggo',
  breed: 'Corgi',
}

const ImgUpload = ({
  onChange,
  src,
}) => (
  <>

    <Label htmlFor="photo-upload" className="custom-file-upload fas">
      <ImgUploadWrap>
        <Img htmlFor="photo-upload" src={src} />
      </ImgUploadWrap>
      <FileInput id="photo-upload" type="file" onChange={onChange} />
    </Label>
  </>
)

ImgUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
}

const Name = ({
  onChange,
  value,
}) => (
  <Field>
    <Label htmlFor="name">
              name:
    </Label>
    <Input
      id="name"
      type="text"
      onChange={onChange}
      maxlength="25"
      value={value}
      placeholder="Doggo"
      required
    />
  </Field>
)

Name.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

Name.defaultProps = {
  value: '',
}

const Breed = ({
  onChange,
  value,
}) => (
  <Field>
    <Label htmlFor="breed">
              breed:
    </Label>
    <Input
      id="breed"
      type="text"
      onChange={onChange}
      maxLength="25"
      value={value}
      placeholder="Welsh Corgi"
      required
    />
  </Field>
)

Breed.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

Breed.defaultProps = {
  value: '',
}

export class CardProfile extends Component {
    state = {
      initialRender: true,
    }

    constructor(props){
      super(props)
      this.id = JWT(Cookies.get('Authorization')).id
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.initialRender) {
        const { data } = nextProps
        const { photoUrl, name, breed, times } = data
        return {
          file: '',
          imagePreviewUrl: photoUrl || 'https://www.nicepng.com/png/detail/914-9142519_doge-meme-dog-doggo-funny-sticker-momo-png.png',
          name,
          breed,
          active: 'profile',
          times: transformItems(times) || [],
          initialRender: false,
        }
      }
      return null
    }

    ListEditor = React.createRef()

    directUpload = (file) => {
      const railsActiveStorageDirectUploadsUrl = '/rails/active_storage/direct_uploads'
      const upload = new DirectUpload(file, railsActiveStorageDirectUploadsUrl)
      upload.create((error, blob) => {
        if (error) {
          console.warn(error)
        } else {
          this.updateAvatar(blob)
        }
      })
    }

    updateAvatar = (blob) => {
      const { data } = this.props
      const { id } = data
      axiosPatchRequest(`/pet_owners/${this.id}/pets/${id}/avatar`, { signed_blob_id: blob.signed_id }, () => undefined)
    }

    photoUpload = e => {
      e.preventDefault()
      const reader = new FileReader()
      const file = e.target.files[0]
      reader.onloadend = () => {
        this.setState({
          file: reader.result,
          imagePreviewUrl: reader.result,
        }, this.directUpload(file))
      }
      reader.readAsDataURL(file)
    }

    editName = e => {
      const name = e.target.value
      this.setState({
        name,
      })
    }

    editBreed = e => {
      const breed = e.target.value
      this.setState({
        breed,
      })
    }

    updatePet = () => {
      const { data } = this.props
      const { id } = data
      axiosPatchRequest(`/pet_owners/${this.id}/pets/${id}`, this.state, () => undefined)
    }

    handleSubmit = e => {
      e.preventDefault()
      const { active } = this.state
      if (active === 'edit') {
        this.setState({ times: this.ListEditor.current.state.items }, this.updatePet)
      }
      const activeP = active === 'edit' ? 'profile' : 'edit'
      this.setState({
        active: activeP,
      })
    }

    handleTask = e => {
    const {data} = this.props
    const {id} = data
    Cookies.set('petId', id)
    window.location.href='#'
    }

    render() {
      const {
        imagePreviewUrl,
        name,
        breed,
        active,
        times,
      } = this.state
      const { handleDelete, data, handleTask } = this.props
      const { id } = data
      return (
        <>
          {
            (active === 'edit') ? (
              <Edit onSubmit={this.handleSubmit} onDelete={handleDelete} id={id}>
                <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                <Name onChange={this.editName} value={name} />
                <Breed onChange={this.editBreed} value={breed} />
                <List ref={this.ListEditor} items={times} />
              </Edit>
            ) : (
              <Profile
                onSubmit={this.handleSubmit}
                src={imagePreviewUrl}
                name={name}
                breed={breed}
                times={times}
                onCreateTask={this.handleTask}
              />
            )
          }
        </>
      )
    }
}

CardProfile.propTypes = {
  data: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleTask: PropTypes.func.isRequired,
}
