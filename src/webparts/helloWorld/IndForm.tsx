import * as React  from 'react';
import styles from'./HelloWorldWebPart.module.scss'

const save_ico = require('./icons/NRD-00001_02013_ICO_Save cccccc_001.svg');
const delete_ico = require('./icons/NRD-00001_02013_ICO_Delete 52525b_001.svg');
const delete_icon1 = require('./icons/NRD-00001_02013_ICO_Delete cccccc_001.svg');
const edit_ico = require( './icons/NRD-00001_02013_ICO_Edit 52525b_001.svg');
const plus_ico = require('./icons/NRD-00001_02013_ICO_New 52525b_001.svg');
const toggle_ico  = require( './icons/NRD-00001_02013_ICO_ToggleLeft cccccc_001.svg');
const save_icon  = require( './icons/NRD-00001_02013_ICO_Save ff6600_001.svg');
const delete_icon  = require( './icons/NRD-00001_02013_ICO_Delete ff6600_001.svg');
const edit_icon  = require('./icons/NRD-00001_02013_ICO_Edit ff6600_001 (1).svg');
const plus_icon  = require( './icons/NRD-00001_02013_ICO_New ff6600_001 (2).svg');
import { state,country, canadaStates, usStates } from './data/Address';
import { comments,documents,parents } from './data/data';
// import { Typeahead } from 'react-bootstrap-typeahead';
// import 'react-bootstrap-typeahead/css/Typeahead.css';
// import { format } from 'url';


export default class IndForm extends React.Component{


    // return <div>Hello</div>;


       constructor(props) {
    super(props);
  }
    state = {
      states: state,
        countries: country,
        save: save_ico,
        edit: edit_ico,
        edit2: edit_ico,
        delete:delete_ico,
        plus:plus_ico,
        delete1:delete_icon1,
        delete2:delete_ico,
        delete3:delete_ico,
        comments:comments,
        documents:documents,
        selectedComment:{},
        tComments: [],
        selectedDocument:{},
        tDocuments:[],
        selected: [],
        selectedCountry: 0,
        zipvalidator:true
    }

    refe2;
    refe1;
  iconOver = (type) => {
    switch(type){
     case 'save':
       this.setState({save:save_icon})
       break;
       case 'edit':
         this.setState({edit:edit_icon})
         break;
         case 'edit2':
          this.setState( {edit2:edit_icon})
          break;
         case 'delete':
           this.setState( {delete: delete_icon})
           break;
           case 'plus':
           this.setState( {plus: plus_icon})
           break;
           case 'delete1':
            this.setState( {delete1:delete_icon})
            break;
            case 'delete2':
            this.setState( {delete2:delete_icon})
            break;
            case 'delete3':
            this.setState( {delete3:delete_icon})
            break;
           default:
             break;
   }
  }

  iconOut = (type) => {
    switch(type){
     case 'save':
       this.setState({save:save_ico})
       break;
       case 'edit':
         this.setState({edit:edit_ico})
         break;
         case 'edit2':
          this.setState({edit2:edit_ico})
          break;

         case 'delete':
           this.setState( {delete: delete_ico})
           break;
           case 'plus':
           this.setState( {plus: plus_ico})
           break;
           case 'delete1':
           this.setState( {delete1:delete_icon1})
           break;
           case 'delete2':
            this.setState( {delete2:delete_ico})
            break;
            case 'delete3':
            this.setState( {delete3:delete_ico})
            break;

           default:
             break;
   }
  }

  selectComment = (event, row) => {
    row._gcomment = row.gcomment;
    this.state.comments.map(c=>{
      if(c.id === row.id){
        c.selected = !c.selected;
        if(c.selected) {
          this.setState({selectedComment:row})
        }else {
          this.setState({selectedComment:{}})
          this.refe2.value = '';
        }
      }else{
        c.selected = false;
      }
    })
    console.log(comments);
  }
  selectDocument = (event, row) => {
    row._docname = row.docname;
    this.setState({selectedComment:row});
    this.state.documents.map(d=>{
      if(d.id === row.id){
        d.selected = !d.selected;
        if(d.selected){
          this.setState({selectedDocument: row})
        }else{
          this.setState({selectedDocument: {}})
          this.refe1.value = '';
        }
      }else{
        d.selected = false;
      }
    })
    console.log(documents);
  }

  changeComment = (event) => {
    let e = event.target.value;
    event.preventDefault();
    //let me = this;
    let _tcoment1 = this.state.comments;
    /** Mutablity isssue  */
    //_tcoment1 = Array.from(this.state.comments);
    let t = {};
    _tcoment1.forEach(c => {
      if(c.id === this.state.selectedComment["id"]){
        c._gcomment = e;
        t = c;
      }
    })
    this.setState({selectedComment: t});
    this.setState({tComments: _tcoment1});
  }
  changeDocument = (event) => {
    let e = event.target.value;
    event.preventDefault();
    //let me = this;
    let _dDoument1 = this.state.documents;
    /** Mutablity isssue  */
    //_tcoment1 = Array.from(this.state.comments);
    let t = {};
    _dDoument1.forEach(d => {
      if(d.id === this.state.selectedDocument["id"]){
        d._docname = e;
        t = d;
      }
    })
    this.setState({selectedDocument: t});
    this.setState({tDocuments: _dDoument1});
  }

  saveComments = () => {
    this.state.tComments.map(c => {
      c.gcomment = c._gcomment ? c._gcomment : c.gcomment;
    })
    this.setState({comments: this.state.tComments})
  }
  saveDocuments = () => {
    this.state.tDocuments.map(d => {
      d.docname = d._docname ? d._docname : d.docname;
    })
    this.setState({documents: this.state.tDocuments})
  }

  selectCountry = (e) => {
    this.setState({selectedCountry: e.target.selectedIndex });
  }

  getValidator = (e) => {
    if(e.target.value === ''){
      this.setState({zipvalidator: true})
      return;
    }
    switch(this.state.selectedCountry){
      case 214:
        this.setState({zipvalidator: (/^(([A-Za-z][A-Za-z]\s\d{5}))$/).test(e.target.value)})
        return;
      case 0:
          this.setState({zipvalidator: (/^(([A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d))$/).test(e.target.value)})
        return;
        default:
            this.setState({zipvalidator: true})
          return;
    }


  }

 render(){

   const states = this.state.selectedCountry === 0 ? canadaStates : (this.state.selectedCountry === 214 ? usStates : [])
    return (
      <div className={styles.container +" "+styles.mainContainer }>
        <div className={styles.contactHeader}>Contact</div>
        <div className={styles.contactToolbar}>


          <img src={this.state.save as string}
            height="20px"
            width="20px"
            className="saveicons"
            alt="saveicon"
            onMouseOver={()=>this.iconOver('save')}
            onMouseOut ={()=>this.iconOut('save')}
          />

          <img src={this.state.delete1 as string}
            height="20px"
            width="20px"
            className="deleteicon1"
            alt="deleteicon"
            onMouseOver={()=>this.iconOver('delete1')}
            onMouseOut ={()=>this.iconOut('delete1')}
          />
             </div>


<div className={styles.togglecontrol}>
            {/* <div className="row toggleupperspace"> */}
            <div className={styles.row}>
              <div className={styles["col-4"]}>
                <span className={styles.togglespan}>Individuals</span>
              </div>

         <div className={styles["col-4"]}>
                <img src={toggle_ico as string}
                  height="25px"
                  width="25px"
                  className="toggleicon"
                  alt="toggleicon"
                />
              </div>


          <div className = {"styles.flexContainer"}>

          <div> Contact </div>

          <div className ={styles.wrapper }>
          <label> First name</label>
          <input type="text" name="fname"></input>



          <div className ={styles.wrapper}>
          <label>Middle Name </label>
          <input type="text" name="Mname"></input>


          <div className ={styles.wrapper}>
          <label>Last name </label>
          <input type="text" name="lname"></input>


          <div className ={styles.wrapper}>
          <label>Preferred Name </label>
          <input type ="text" name ="pname"></input>
        </div>
        </div>
        </div>
        </div>
        </div>



        //Deceased

         <hr/>

         <div> Contact </div>

         <div className ={styles.wrapper }>
          <label> Home Phone </label>
          <input type="text" name="fname"></input>


          <div className ={styles.wrapper}>
          <label>Mobile Number </label>
          <input type="text" name="Mname"></input>


          <div className ={styles.wrapper}>
          <label>Business Phone </label>
          <input type="text" name="lname"></input>


          <div className ={styles.wrapper}>
          <label>Ext </label>
          <input type ="text" name ="pname"></input>


            <div className ={styles.wrapper}>
         <label> Fax Number</label>
            <input type ="integer" className="form-control" maxLength={12} name ="fno"></input>

            <div className ={styles.wrapper}>
         <label> Email Address</label>
            <input type ="text" className="form-control" maxLength={12} name ="Email"></input>

</div>
</div>
</div>
</div>
</div>
</div>

<hr/>


          <div>Address</div>

          <div className ={styles.wrapper }>
          <label> City/Muncipality </label>
          <input type="text" name="fname"></input>


          <div className ={styles.wrapper}>
          <label>Country </label>
          <input type="text" name="Mname"></input>


          <div className ={styles.wrapper}>
          <label>Province/State </label>
          <input type="text" name="lname"></input>


          <div className ={styles.wrapper}>
          <label>Postal/Zipcode </label>
          <input type ="text" name ="pname"></input>


            <div className ={styles.wrapper}></div>
         <label> Home Quarter </label>
            <input type ="integer" className="form-control" maxLength={12} name ="fno"></input>

            <div className ={styles.wrapper}></div>
         <label> checkbox</label>
         <label> Residence</label>
            <input type ="text" className="form-control" maxLength={12} name ="Email"></input>

</div>
</div>
</div>
</div>

<hr/>

           <div>Tax Number </div>
          <div className={styles.wrapper}>
          <label> GST</label>
            <input type ="text" className="form-control" maxLength={17} name ="GST"></input>

            <div className={styles.wrapper}>
            <label> HST</label>
            <input type ="text" className="form-control" maxLength={17} name ="HST"></input>

            <div className={styles.wrapper}>
          <label> PST</label>
            <input type ="text" className="form-control" maxLength={17} name ="PST"></input>

            <div className={styles.wrapper}>
          <label> QST</label>
            <input type ="text" className="form-control" maxLength={17} name ="QST"></input>
            </div>
            </div>
            </div>

<hr/>
          <h5>Parent (Individual or Entity)</h5>

          <div className={styles.wrapper}></div>
           <input type ="text" className="form-control" name ="Typeaheadbox"></input>
           <div className={styles.usericonAlign}>
            <i className="fas fa-user"></i>
            </div>
          </div>
          <hr/>


          <h5>Comments</h5>

         <table >




            <tr>
             <th>General Comment regarding Individual</th>
             <th>Date</th>
             <th>Who</th>
          </tr>



          <tr>
          <td>Comment about person</td>
          <td>June 4</td>
          <td>Dave King</td>
          </tr>

       <tr>
          <td>Comment about person</td>
          <td>June 4</td>
          <td>Dave King</td>
        </tr>
         </table>


         <h5>Documents</h5>

         <table >
           <tr>
             <th>NRD</th>
             <th>Date</th>
             <th>Who</th>
          </tr>


           <tr>
          <td>NRD2</td>
          <td>June 4</td>
          <td>Dave King</td>
          </tr>

       <tr>
          <td>NRD3</td>
          <td>June 4</td>
          <td>Dave King</td>
        </tr>
         </table>



            </div>
            </div>
            </div>










     ) }
}