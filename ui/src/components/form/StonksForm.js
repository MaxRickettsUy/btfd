import { Grid } from 'semantic-ui-react';
import React from 'react';
import { Formik, Field, Form } from 'formik';

const Basic = ({addHolding,setOpen}) => (
<div>
  <Formik
    initialValues={{
      holdingName: 'BTC',
      costBasis: 0,
      amount: 0,
    }}
    onSubmit={async (values) => {
      addHolding(values)
      setOpen(false)
    }}
  >
    <Form>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={4}>
                  <label htmlFor="holdingName">Holding Name</label>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Field
                    style={{width: '50%'}}
                    id="holdingName" 
                    name="holdingName" 
                    placeholder="AAPL" 
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={4}>
                  <label htmlFor="costBasis">Cost Basis</label>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Field 
                    style={{width: '50%'}}
                    id="costBasis" 
                    name="costBasis" 
                    placeholder="0" 
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={4}>
                  <label htmlFor="amount">Amount</label>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Field
                    style={{width: '50%'}}
                    id="amount"
                    name="amount"
                    placeholder="0"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={1}>
              <Grid.Row>
                <Grid.Column>
                  <button style={{width: '50%'}} type="submit">Submit</button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  </Formik>
</div>
);

export default Basic;