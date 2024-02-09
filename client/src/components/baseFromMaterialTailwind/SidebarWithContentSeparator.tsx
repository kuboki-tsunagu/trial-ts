import React from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  TagIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

import { Category } from '../../../types/types';

type Props = {
  categories: Category[] | undefined;
};

export function SidebarWithContentSeparator({ categories }: Props) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        {categories?.map((category, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === index + 1 ? 'rotate-180' : ''
                }`}
              />
            }>
            <ListItem className="p-0" selected={open === index + 1}>
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className="border-b-0 p-3">
                <ListItemPrefix>
                  {/* You can replace this with your actual category icon */}
                  <TagIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  {category.name}
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                {category.secondary.map((subcategory, subIndex) => (
                  <ListItem key={subIndex}>
                    <ListItemPrefix>
                      {/* You can replace this with your actual subcategory icon */}
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    {subcategory.name}
                  </ListItem>
                ))}
              </List>
            </AccordionBody>
          </Accordion>
        ))}
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <SunIcon className="h-5 w-5" />
          </ListItemPrefix>
          ヘルプ
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
