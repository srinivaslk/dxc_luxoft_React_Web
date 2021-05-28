import React from "react"
import { Card, CardBody, Col, Row} from "reactstrap"

class StatisticsCards extends React.Component {
  intervalID;
  _isMounted = false;
  constructor(props) {
    super(props);
     this.state= {
      lg_stores:[],
      f_stores:[],
      data: [],
      _isMounted:false
    };
 
    localStorage.setItem('uiqueId', this.props.match.params.id);
  }
  async componentDidMount() {
    // need to make the initial call to getData() to populate
    // data right away
    if(this.state._isMounted === false)
    {
    await this.getData();
    this.intervalID = setInterval(this.getData.bind(this), 900000);
    
  }
}

  
  async componentWillUnmount() {
    this.state._isMounted = false
    /*
          stop getData() from continuing to run even
          after unmounting this component. Notice we are calling
          'clearTimeout()` here rather than `clearInterval()` as
          in the previous example.
        */
      clearTimeout(this.intervalID);
  }
  async getData(){
    this.state._isMounted = true;
       const url = "https://us-central1-sage-nucleus-251105.cloudfunctions.net/getCloudTerminalsByOwner?tenant_owner=etpos";
       const requestOptions = {
       method: 'GET',
       mode: 'cors'
       };
    await fetch(url,requestOptions)
          .then(response => response.json())
          .then(data => {
            this.setState({ data: [...data] });
          let array4 = this.state.data
          let f_array4 = this.state.data;
          this.state._isMounted = false;
          let lg_array3 = [
            {
           "tenant": "MADNCO",
           "tenant_owner": "BUBBLE TEA"
            },
            {
                "tenant": "PISTAHOUSECHAI",
                "tenant_owner": "PISTA HOUSE BAKERY"
            },
            {
                "tenant": "ANGEETHIFOODCOURT",
                "tenant_owner": "ANGEETHI"
            },
            {
                "tenant": "SARDAR",
                "tenant_owner": "Sardhar Ji Chaap Wale"
            },
            {
                "tenant": "KAREEMS",
                "tenant_owner": "Kareems"
            },
            {
                "tenant": "MAHARAJA",
                "tenant_owner": "Maharaja Chaat"
            },
            {
                "tenant": "WOWMOMOS",
                "tenant_owner": "WOW MOMOS"
            },
            {
                "tenant": "SIZZLINGJOE",
                "tenant_owner": "SIZZLING JOE"
            },
            {
                "tenant": "PISTAHOUSE",
                "tenant_owner": "PISTA HOUSE-BIRYANIS"
            },
            {
                "tenant": "CREAMSTONE",
                "tenant_owner": "CREAM STONE"
            },
            {
                "tenant": "BUZZFRANKIE",
                "tenant_owner": "BUZZ FRANKIE"
            },
            {
                "tenant": "TANVI",
                "tenant_owner": "TANVI FOODS"
            },
            {
                "tenant": "EATCONFETTI",
                "tenant_owner": "EAT CONFETTI"
            },
            {
                "tenant": "KAFE",
                "tenant_owner": "KAFI House"
            },
            {
                "tenant": "BANARAS",
                "tenant_owner": "BANARAS PAN"
            },
            {
                "tenant": "PIZZA HUT",
                "tenant_owner": "PIZZA HUT"
            },
            {
                "tenant": "SUBWAY",
                "tenant_owner": "SUBWAY"
            },
            {
                "tenant": "KFC",
                "tenant_owner": "KFC"
            },
            {
                "tenant": "Haldiram's",
                "tenant_owner": "Haldiram's"
            },
            {
                "tenant": "VIHAHA BOJANAM",
                "tenant_owner": "VIHAHA BOJANAM"
            },
            {
                "tenant": "MC-DONALD",
                "tenant_owner": "MC-DONALD"
            },
            {
                "tenant": "SK Udupi Grand",
                "tenant_owner": "SK Udupi Grand"
            },
            {
                "tenant": "PHAL KETH",
                "tenant_owner": "PHAL KETH"
            },
            {
                "tenant": "BAKLAVA",
                "tenant_owner": "BAKLAVA SWEETS"
            },
            {
                "tenant": "ICY Toons",
                "tenant_owner": "ICY Toons"
            } ,
           
            {
                "tenant": "VIVAHAB",
                "tenant_owner": "VIHAHA BOJANAM"
            }
            
                ]
let f_array3 =[
                {
                    "tenant": "OHSO",
                    "tenant_owner": "OH SO STONED"
                },
                {
                    "tenant": "COCOFIT",
                    "tenant_owner": "COCO-FIT"
                },
                {
                    "tenant": "MASALA",
                    "tenant_owner": "Masala Express"
                },
                {
                    "tenant": "GABRUDICHAAP",
                    "tenant_owner": "GABRU DE CHAAP"
                },
                {
                    "tenant": "COLA",
                    "tenant_owner": "CocoCola"
                },
                {
                    "tenant": "ROLLZONE",
                    "tenant_owner": "ROLLZONE"
                },
                {
                    "tenant": "ROLLOVER",
                    "tenant_owner": "ROLL OVER ICE CREAM"
                },
                {
                    "tenant": "BEIJING",
                    "tenant_owner": "BEJING BITES"
                },
                {
                    "tenant": "MOJO",
                    "tenant_owner": "MOJO SIZZILERS"
                },
                {
                    "tenant": "KEBABS",
                    "tenant_owner": "KABABS & BIRYANI"
                },
                {
                    "tenant": "KHANSAAB",
                    "tenant_owner": "KHAN SAAB"
                },
                {
                    "tenant": "BBH",
                    "tenant_owner": "BUDA PEST"
                },
                {
                    "tenant": "JEWELS",
                    "tenant_owner": "12 JEWELS KITCHEN"
                },
                {
                    "tenant": "THICKSHAKE",
                    "tenant_owner": "THE THICK SHAKE FACTORY"
                },
                {
                    "tenant": "GELATISSIMO",
                    "tenant_owner": "GELATISSIMO"
                },
                {
                    "tenant": "TIBBS",
                    "tenant_owner": "TIBBS FRANKIE"
                },
                {
                    "tenant": "RUCHI",
                    "tenant_owner": "RUCHI FOODS"
                },
                {
                    "tenant": "ZOMOZ",
                    "tenant_owner": "ZOMOZ"
                },
                {
                    "tenant": "TWISTING",
                    "tenant_owner": "MAGIC CONES"
                },
                {
                    "tenant": "MOCKTAILS",
                    "tenant_owner": "PAAN N MOCKTAILS"
                },
                {
                    "tenant": "CHAITHADI",
                    "tenant_owner": "CHAI THADI"
                },
                {
                    "tenant": "EGGS",
                    "tenant_owner": "SHINCHAN MAGGIE"
                },
                {
                    "tenant": "SQUEEZ",
                    "tenant_owner": "SQUEEZ"
                },
                {
                    "tenant": "UDIPI GRAND",
                    "tenant_owner": "UDIPI GRAND"
                },
                {
                    "tenant": "GAYATHRI CHAT",
                    "tenant_owner": "GAYATHRI CHAT"
                },
                {
                    "tenant": "JIMOSA",
                    "tenant_owner": "JIMOSA"
                },
                {
                    "tenant": "TOP",
                    "tenant_owner": "TASTE OF PUNJAB"
                },
                {
                    "tenant": "PISTA HOUSE 4F",
                    "tenant_owner": "PISTA HOUSE 4F"
                },
                {
                    "tenant": "HITECHGG",
                    "tenant_owner": "HI TECH GUNDAMMA"
                }
            ]; 
        
        
        let lg_arry = [];
        let f_arry = [];
        let status;
        let color;
        let final_tenant;
        let tenant_sub;
        let firstDate;
        let secondDate;
        let since;
        let trimTemp;
        let trimData;
        var today; 
        var diffMs;
        var diffHrs;
        var diffMins;
      array4.forEach((item) => {
      lg_array3.forEach((ite) => {
      trimTemp =ite.tenant;
      trimData = item.tenant;
      if(trimTemp.trim() === trimData.trim())
      {
      tenant_sub = ite.tenant_owner;
      firstDate = new Date(item.terminal_data[0].time_stamp.replace(/-/g,"/"));
      firstDate.toUTCString();
     // firstDate;
      secondDate = new Date();
      today = secondDate
      diffMs = (today -firstDate); // milliseconds between now & Christmas
      
      diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
      diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
      if(diffMins<15 && diffHrs === 0)
      {
      status = "Online";
      color = "green";
      since = diffMins;
      item.color = color;
      item.hrs = diffHrs;
      item.since = since;
      }
      else
      {
      status = "Offline";
      color = "red";
      since = diffMins;
      item.color = color;
      item.hrs = diffHrs;
      item.since = since;
      }
      item.status = status;
      if(tenant_sub.length <= 22)
      {
      final_tenant = tenant_sub;
      }
      else{
      final_tenant = tenant_sub.substring(0, 22)+"..."
      }  
      item.updateTenant = final_tenant.toUpperCase();
      lg_arry.push(item);
      }
      })
      });
      /* 4F Logic Implemented */
      f_array4.forEach((item) => {
        f_array3.forEach((ite) => {
        trimTemp =ite.tenant;
        trimData = item.tenant;
        if(trimTemp.trim() === trimData.trim())
        {
        tenant_sub = ite.tenant_owner;
        firstDate = new Date(item.terminal_data[0].time_stamp.replace(/-/g,"/"));
        firstDate.toUTCString();
        secondDate = new Date();
        today = secondDate
        diffMs = (today -firstDate); // milliseconds between now & Christmas
        
        diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        if(diffMins<15 && diffHrs === 0 )
        {
        status = "Online";
        color = "green";
        since = diffMins;
        item.hrs = diffHrs;
        item.color = color;
        item.since = since;
        }
        else
        {
        status = "Offline";
        color = "red";
        since = diffMins;
        item.hrs = diffHrs;
        item.color = color;
        item.since = since;
        }
        item.status = status;
        if(tenant_sub.length <= 22)
        {
        final_tenant = tenant_sub;
        }
        else{
        final_tenant = tenant_sub.substring(0, 22)+"..."
        }  
        item.updateTenant = final_tenant.toUpperCase();
        f_arry.push(item);
        
        }
        })
        }) 
      /* End 4F Logic */
      this.setState({f_stores:f_arry});   
      this.setState({lg_stores:lg_arry});
    // Now we need to make it run at a specified interval
    //setInterval(this.getData, 90000); // runs every 5 seconds.
            // call getData() again in 5 seconds          
          });                 
  }
  render() {
    return (
      <React.Fragment>
          <div><h1><b>LG Food Court</b></h1></div> 
             <Row className="vt">
             {this.state.lg_stores.map(store => ( 
             <Col lg="2" id={store.updateTenant} key={store.updateTenant}>
              <Card className="text-center">
                <CardBody style={{ marginTop: '16px'}}>
                  <h5>{store.updateTenant}</h5>
                  <span style={{color: `${store.color}`}}><b>{store.status}</b></span>
                  <span ><div>Since {store.hrs} hrs {store.since} min</div></span>
                </CardBody>
              </Card>
            </Col>
            ))}
              </Row>
              <div><h1><b>4F Food Court</b></h1></div>
                <Row className="vt">
             {this.state.f_stores.map(store => ( 
             <Col lg="2" id={store.updateTenant} key={store.updateTenant}>
              <Card className="text-center">
                <CardBody style={{ marginTop: '16px'}}>
                  <h5>{store.updateTenant}</h5>
                  <span style={{color: `${store.color}`}}><b>{store.status}</b></span>
                  <span ><div>Since {store.hrs} hrs {store.since} min</div></span>
                </CardBody>
              </Card>
            </Col>
            ))}
              </Row>
      </React.Fragment>
    )
  }
}

export default StatisticsCards
