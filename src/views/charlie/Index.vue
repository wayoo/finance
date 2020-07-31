<template>
  <div class="page page-charlie">
    <h2>Investment Evaluation Process</h2>
    <div>
      <tag type="border" color="primary">self-discipline</tag>
      <tag type="border" color="primary">patience</tag>
      <tag type="border" color="primary">calm</tag>
      <tag type="border" color="primary">independence</tag>
    </div>
    <div>
      Hard work is an essential element in tracking down
      and perfecting a strategy or in executing it.
    </div>
    <div>
      The habit of committing far more time to learning and thinnking than to doing is no accident.
      <br>
      It is the blend of discipline and patience exhibited by true masters of a craft:
      an uncompromising (不妥协的) commitment to "properly playing the hand."
    </div>
    <div class="indicator">
      <Steps :current="current">
          <Step title="Filter"></Step>
          <Step title="Evaluation"></Step>
          <Step title="Timing"></Step>
      </Steps>
    </div>

    <div v-if="current === 0">
      <Row :gutter="16" class="resp">
        <i-col span="8" :xs="24">
          <Card>
            <p slot="title">No</p>
            <div>
              <CheckboxGroup v-model="form_filter.no">
                <Checkbox label="Heavily promoted 'deals'"></Checkbox>
                <Checkbox label="IPOs"></Checkbox>
              </CheckboxGroup>
            </div>
          </Card>

        </i-col>

        <i-col span="8" :xs="24">
          <Card>
            <p slot="title">Too tough to understand</p>
            <CheckboxGroup v-model="form_filter.tough">
              <Checkbox label="Pharmaceuticals"></Checkbox>
              <Checkbox label="Technology"></Checkbox>
            </CheckboxGroup>
          </Card>

        </i-col>

        <i-col span="8" :xs="24">
          <Card>
              <p slot="title">Yes</p>
              <div>
                easy to understand, dominant business franchisc that can sustain
                itself and thrive in all market environments.
              </div>
          </Card>
        </i-col>
      </Row>
    </div>

    <!-- step two -->
    <div class="investigation" v-if="current === 1">
      <Collapse v-model="form_two.opened">
        <Panel name="1">
            Financial Reports
            <div slot="content">
              <div>
                The begining of a proper calculation of intrinsic valuation.
              </div>

              Recast all financial sratement figures to fit his own view of reality:
              <list border>
                <list-item>
                  The actual free or "owners" cash being produced
                </list-item>
                <list-item>
                  <Checkbox>Inventory and other working capital assets</Checkbox>
                </list-item>
                <list-item>
                  <Checkbox>Fixed assets</Checkbox>
                </list-item>
                <list-item>
                  <Checkbox>Intangible assets as goodwill</Checkbox>
                </list-item>
                <list-item>
                  True impact, current and future, of the cost of stock options,
                  pension plans, and retiree medical benefits
                </list-item>
                <list-item>
                  Assesses a company's management: able, trustworthy, and owner-oriented.
                  <br>
                  How do they deploy cash? Do they allocate it intelligently on behalf of
                  the owners, or do they overcompensate themselves, or pursue ego-oriented
                  growth for growth's sake?
                </list-item>
              </list>
            </div>

        </Panel>
        <Panel name="2">
            The list of additional factors
            <div slot="content">
              <List border>
                  <ListItem>The current and prospective regulatory climate</ListItem>
                  <ListItem>State of labor, supplier, and customer relations</ListItem>
                  <ListItem>
                    Potential impact of changes in technology
                  </ListItem>
                  <ListItem>
                    Competitive strengths and vulnerabilities(漏洞、脆弱性)
                  </ListItem>
                  <list-item>
                    <Checkbox>Pricing power</Checkbox>
                  </list-item>
                  <list-item>
                    <Checkbox>Scalability</Checkbox>
                  </list-item>
                  <list-item>
                    Environmental issues
                  </list-item>
                  <list-item>
                    The presence of hidden exposures
                  </list-item>
              </List>
              <br>
              Searching for those with few risks that are easily understandable.
              There is no such thing as a riskless investment candidate.
            </div>
        </Panel>
        <Panel name="3">
            Competitive advantage
            <div slot="content">
              <list>
                <list-item>
                  products
                </list-item>
                <list-item>
                  markets
                </list-item>
                <list-item>
                  trademarks
                </list-item>
                <list-item>
                  employees
                </list-item>
                <list-item>
                  distribution channels
                </list-item>
                <list-item>
                  societal trends
                </list-item>
                <list-item>
                  The durability of that advantage
                </list-item>
              </list>
            </div>
        </Panel>
        <Panel name="4">
          Calculate the intrinsic value of the whole business
          <div slot="content">
            A great business at a fair price is superior to a fair
            business at a great price.
            <br>
            <tag color="success" size="medium">
              exceptionally superior investment candidate
            </tag>
          </div>
        </Panel>

        <Panel name="5">
          PS: Great business model
          <div slot="content">
            His reading materials provide some guidance.
            <br>
            a focus on the aforementioned issue of "competitive destruction" and
            an examination of why some entities are nevertheless able to adapt,
            survive, and even dominate over time.
            <br>
            Guns, Germs, and Steel, The Selfish Gene, Ice Age, and Daroin's Blind Spot.
            all have a certain theme: a focus on the aforementioned issue of
            "competitive destruction" and an examination of why some entities are nevertheless
            able to adapt, survive, and even dominate over time.
            <br>
            The preferred Munger business emerges: Some thrive by <em>outcompeting</em>
            (The Selfslt Gene)
            and others by <em>outcooperating</em>(Daraini Blind Spot).
          </div>
        </Panel>
      </Collapse>
    </div>

    <!-- 时机 -->
    <div class="timing" v-if="current === 2">
      <Collapse v-model="form_three.opened">
        <Panel name="3">
          A necessary companion to proper valuation is proper timing
          <div slot="content">
            <list>
              <list-item>
                What are current price, volume, and trading considerations?
              </list-item>
              <list-item>
                What disclosure timing or other sensitivities exits?
              </list-item>
              <list-item>
                Do contingent exit strategies exist?
              </list-item>
              <list-item>
                Are better uses of capital currently or potentially available?
              </list-item>
              <list-item>
                Is sufficient liquid capital currently on hand or must it be borrowed?
              </list-item>
              <list-item>
                What is the opportunity cost of that capital?
              </list-item>
            </list>
          </div>
        </Panel>
      </Collapse>
    </div>

    <Button class="operation" type="primary" @click="next">Next step</Button>
    <Icon type="ios-checkmark" />
  </div>
</template>

<script>
import '../iview';
import '../style.less';

export default {
  data() {
    return {
      current: 0,

      checked: [],

      form_filter: {
        no: [],
        tough: [],
      },

      form_two: {
        opened: [
          '1', '2', '3', '4',
        ],
      },

      form_three: {
        opened: [
          '1', '2', '3',
        ],
      },
    };
  },
  methods: {
    next() {
      if (this.current === 2) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    },
  },
};
</script>

<style lang="less">
.page-charlie {
  .indicator {
    padding: 20px 0;
  }

  .operation {
    margin-top: 20px;
  }

  .investigation,
  .timing {
    max-width: 680px;
    margin: 0 auto 20px;
  }

  .resp {
    .ivu-col {
      margin-bottom: 10px;
    }
  }
}
</style>
