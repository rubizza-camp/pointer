import React, { Component } from 'react'
import { render } from 'react-dom'
import { axiosPostRequest, axiosPatchRequest, axiosGetRequest } from 'utils/axios_helper'
import styled, { createGlobalStyle } from 'styled-components'
import { Spinner } from 'reactstrap'
import List, { Field, Input, Label } from './List'
import {transformItems, prepareRequest} from '../utils/pet_helpers'
import { DirectUpload } from 'activestorage'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Hind Guntur', sans-serif;
  color: #054231;
  }`
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

const Card = styled.div`

  padding: 15px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 5px 5px 15px 0px  #3fa1a9;
  box-shadow: 5px 5px 15px 0px  #3fa1a9;
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  background: #f7f7f7ff;
  width: 30%
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0 0 25px 0;
  }`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`

const Button = styled.button`
  position: relative;
  color: #054231;
  letter-spacing: 1px;
  margin: 20px;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  transition: 0.5s;
  border-radius: 10px;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  background: #64d488;
  :hover{
  color: #fff;
  box-shadow: 0px 0px 20px 0px 
  }
`

const EditButton = styled(Button)`
color: #fff;
width: 180px;`
const SaveButton = styled(Button)`
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
box-shadow: 10px 0px 10px 0px  #63d3a6;
max-height: 50px;`

const TimeTable = (props) => (<h1> Hi </h1>)
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
const Profile = ({
  onSubmit,
  src,
  name,
  breed,
  times,
}) => (
  <Card>
    <Form enctype="multipart/form-data" onSubmit={onSubmit}>
      <h1>Profile Card</h1>
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
      <EditButton type="submit" className="edit">Edit Profile </EditButton>
    </Form>
  </Card>
)
const Edit = ({
  onSubmit,
  children,
}) => (
  <Card>
    <Form encType="multipart/form-data" onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      {children}
      <SaveButton type="submit">Save</SaveButton>
    </Form>
  </Card>
)

class CardProfile extends React.Component {
  
    state = {
      file: '',
      imagePreviewUrl: this.props.data.photo_url || 'https://www.nicepng.com/png/detail/914-9142519_doge-meme-dog-doggo-funny-sticker-momo-png.png',
      name: this.props.data.name,
      breed: this.props.data.breed,
      active: 'profile',
      times: transformItems(this.props.data.times)||[],
      id: this.props.data.id
    }

    constructor(props) {
      super(props)
      this.ListEditor = React.createRef()
    }

    directUpload = (file) =>
    {
      console.log(this.state)
      const railsActiveStorageDirectUploadsUrl = "http://localhost:5000/rails/active_storage/direct_uploads";
      const upload = new DirectUpload(file, railsActiveStorageDirectUploadsUrl)
      upload.create((error, blob) => {
        if (error) {
          console.log(error)
        } else {
          this.updateAvatar(blob)
         }
      })
      
    }

    updateAvatar = (blob) =>
    {
      const {id} = this.state
      console.log(blob)
      axiosPatchRequest(`/pet_owners/1/pets/${id}/avatar`, {signed_blob_id: blob.signed_id},(response) => console.log(response))
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
      const { id } = this.state
      axiosPatchRequest(`/pet_owners/1/pets/${id}`, this.state, response => console.log(response))
    }

    handleSubmit = e => {
      e.preventDefault()
      const { active} = this.state
      if (active === 'edit')
      {
        console.log(this.ListEditor.current.state)
        this.setState({ times: this.ListEditor.current.state.items},  this.updatePet)
      } 
      const activeP = active === 'edit' ? 'profile' : 'edit'
      this.setState({
        active: activeP,
      })
    }
  

    render() {
      const {
        imagePreviewUrl,
        name,
        breed,
        active,
        times,
      } = this.state
      return (
        <>
          {
            (active === 'edit') ? (
              <Edit onSubmit={this.handleSubmit}>
                <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                <Name onChange={this.editName} value={name} />
                <Breed onChange={this.editBreed} value={breed} />
                <List ref={this.ListEditor} items={this.state.times} />
              </Edit>
            ) : (
              <Profile
                onSubmit={this.handleSubmit}
                src={imagePreviewUrl}
                name={name}
                breed={breed}
                times={times}
              />
            )
}


        </>
      )
    }
}
// ListEditor.current.


const PetContainer = (props) => {
  {
    return (

      <>
        {props.data.map((c) => (
          <CardProfile data={ (c==null)?({}):(c.attributes)} key = {c.attributes.id}/>
        ))}
      </>
    )
  }
}

class PetController extends Component {
  state = { data: [], loading: true }

  componentDidMount() {
    axiosGetRequest('/pet_owners/1/pets', {}, (response) => { this.setState({ data: response.data.data, loading: false }) })
  }

  addPet = () => {
    this.setState({ loading: true })
    axiosPostRequest('/pet_owners/1/pets', {}, (response) => this.setState(({ data }) => ({ loading: false, data: [...data, response.data.data] })))
  }

  render() {
    const { data, loading } = this.state
    return (
      <>
        {
       (loading) ? (<Spinner color="warning" type="grow" />) : (

         <>
           <GlobalStyle />
           <Wrapper>
             <PetContainer data={data} />
             <Card>
               <SaveButton onClick={this.addPet}>Add a pet</SaveButton>
             </Card>
           </Wrapper>
         </>
       )
          }
      </>
    )
  }
}
const Wrapper = styled.div`
width:100%; 
display: flex;
flex-wrap: wrap;
@media only screen and (max-width: 650px) {
   margin: 0 0 25px 0;
   flex-direction: column;
}`

render(<PetController />, document.body.appendChild(document.createElement('div')))
