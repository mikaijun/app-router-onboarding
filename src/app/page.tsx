import { Card, CardBody, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <Card className='mt-4'>
        <CardBody>
          <h2>Tabs</h2>
          <Tabs>
            <TabList>
              <Tab>tab1</Tab>
              <Tab>tab2</Tab>
              <Tab>tab3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>content1</p>
              </TabPanel>
              <TabPanel>
                <p>content2</p>
              </TabPanel>
              <TabPanel>
                <p>content3</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </main>
  )
}
