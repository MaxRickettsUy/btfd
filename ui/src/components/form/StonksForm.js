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
      isCrypto: false
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
                <Grid.Column width={6}>
                  <Field
                    id="holdingName" 
                    name="holdingName" 
                    placeholder="AAPL" 
                  />
                </Grid.Column>
                <Grid.Column width={6}>
                <label>
                  <Field 
                    style={{marginRight: 10}}
                    type="checkbox"
                    name="isCrypto"
                  />
                  Check for cryptocurrency
                </label>
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
                    id="amount"
                    name="amount"
                    placeholder="0"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={1}>
              <Grid.Row>
                <Grid.Column width={16}>
                  <button style={{width: '100%'}} type="submit">Submit</button>
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