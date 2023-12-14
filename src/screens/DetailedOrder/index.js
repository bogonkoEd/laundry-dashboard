import React from 'react'
import { Card, Descriptions, Divider, List, Button } from "antd";
import dishes from "../../assets/data/dishes.json";
import { useParams } from 'react-router';

const DetailedOrder = () => {
    const {id} = useParams();

    return (
        <Card title={'Order ' +id}>
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Customer Name">John Smith</Descriptions.Item>
            <Descriptions.Item label="Customer Address">5</Descriptions.Item>
          </Descriptions>
          <Divider />
          <List
            dataSource={dishes}
            renderItem={(item) => (
              <List.Item>
               <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <div style={{fontWeight: 'bold'}}>{item.name} * {item.quantity}</div>
                  <div>KES {item.price}</div>
                </div>
    
              </List.Item>
            )}
          />
          <Divider />
          <div style={styles.container}>
            <div style={{fontWeight: 'bold'}}>Total</div>
            <div>KES 1000</div>
          </div>
          <Divider />
          <div style={styles.buttons}>
            <Button block type="dashed" size="large" style={styles.button}>
              Cancel Order
            </Button>
    
            <Button block type="primary" size="large" style={styles.button}>
              Accept Order
            </Button>
          </div>
            <Button block type="primary">
              Order Complete
            </Button>
        </Card>
      );
    }
    
    const styles = {
      container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      buttons: {
        display: "flex",
        paddingBottom: 30
      },
      button:{
        marginRight: 25,
      },
    };

export default DetailedOrder