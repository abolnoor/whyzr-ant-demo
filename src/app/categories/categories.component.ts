import { Component, OnInit } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  data: any = {
    "totalCount": 7,
    "items": [
      {
        "name": "cat 1",
        "name2": "",
        "name3": "",
        "slug": "cat-1",
        "slug2": "",
        "slug3": "",
        "image": null,
        "disabled": false,
        "hideFromHomePage": true,
        "hideFromHomeMenu": true,
        "displayOrder": 0,
        "parentId": null,
        "parentName": null,
        "isDeleted": false,
        "deleterId": null,
        "deletionTime": null,
        "lastModificationTime": null,
        "lastModifierId": null,
        "creationTime": "2021-04-14T07:49:35.5308805Z",
        "creatorId": "c9f7af60-5d3f-abec-035d-39fbd24c630d",
        "id": "d43c3f49-0cf3-6f74-1d37-39fbe1883707"
      },
      {
        "name": "cat1 child 1",
        "name2": "",
        "name3": "",
        "slug": "cat1-child-1",
        "slug2": "",
        "slug3": "",
        "image": null,
        "disabled": false,
        "hideFromHomePage": true,
        "hideFromHomeMenu": true,
        "displayOrder": 0,
        "parentId": "d43c3f49-0cf3-6f74-1d37-39fbe1883707",
        "parentName": "cat 1",
        "isDeleted": false,
        "deleterId": null,
        "deletionTime": null,
        "lastModificationTime": "2021-04-14T07:54:54.7659754Z",
        "lastModifierId": "c9f7af60-5d3f-abec-035d-39fbd24c630d",
        "creationTime": "2021-04-14T07:51:31.8505627Z",
        "creatorId": "c9f7af60-5d3f-abec-035d-39fbd24c630d",
        "id": "3c1b9553-5e0f-51db-647f-39fbe189fd83"
      },
      {
        "name": "cat1 child 2",
        "name2": "",
        "name3": "",
        "slug": "cat1-child-2",
        "slug2": "",
        "slug3": "",
        "image": null,
        "disabled": false,
        "hideFromHomePage": true,
        "hideFromHomeMenu": true,
        "displayOrder": 0,
        "parentId": "d43c3f49-0cf3-6f74-1d37-39fbe1883707",
        "parentName": "cat 1",
        "isDeleted": false,
        "deleterId": null,
        "deletionTime": null,
        "lastModificationTime": "2021-04-14T07:55:14.1627718Z",
        "lastModifierId": "c9f7af60-5d3f-abec-035d-39fbd24c630d",
        "creationTime": "2021-04-14T07:51:50.0380144Z",
        "creatorId": "c9f7af60-5d3f-abec-035d-39fbd24c630d",
        "id": "c048fa0d-a238-21c3-1a05-39fbe18a4490"
      },
      {
        "name": "cat1child1 child 1",
        "name2": "",
        "name3": "",
        "slug": "cat1child1-child-1",
        "slug2": "",
        "slug3": "",
        "image": null,
        "disabled": false,
        "hideFromHomePage": true,
        "hideFromHomeMenu": true,
        "displayOrder": 0,
        "parentId": "3c1b9553-5e0f-51db-647f-39fbe189fd83",
        "parentName": "cat1 child 1",
        "isDeleted": false,
        "deleterId": null,
        "deletionTime": null,
        "lastModificationTime": null,
        "lastModifierId": null,
        "creationTime": "2021-04-14T07:56:15.6481776Z",
        "creatorId": "c9f7af60-5d3f-abec-035d-39fbd24c630d",
        "id": "cbd7694d-4e2a-1640-1d1d-39fbe18e521a"
      },
      {
        "name": "cat 2",
        "name2": "",
        "name3": "",
        "slug": "cat-2",
        "slug2": "",
        "slug3": "",
        "image": null,
        "disabled": false,
        "hideFromHomePage": true,
        "hideFromHomeMenu": true,
        "displayOrder": 1,
        "parentId": null,
        "parentName": null,
        "isDeleted": false,
        "deleterId": null,
        "deletionTime": null,
        "lastModificationTime": null,
        "lastModifierId": null,
        "creationTime": "2021-04-14T07:50:50.4112444Z",
        "creatorId": "c9f7af60-5d3f-abec-035d-39fbd24c630d",
        "id": "6a3776ca-3f73-e6b8-31ef-39fbe1895ba5"
      },
      {
        "name": "cat 3",
        "name2": "",
        "name3": "",
        "slug": "cat-3",
        "slug2": "",
        "slug3": "",
        "image": null,
        "disabled": false,
        "hideFromHomePage": true,
        "hideFromHomeMenu": true,
        "displayOrder": 2,
        "parentId": null,
        "parentName": null,
        "isDeleted": false,
        "deleterId": null,
        "deletionTime": null,
        "lastModificationTime": null,
        "lastModifierId": null,
        "creationTime": "2021-04-14T07:51:06.1937622Z",
        "creatorId": "c9f7af60-5d3f-abec-035d-39fbd24c630d",
        "id": "05edc201-bcb0-8a09-13c0-39fbe1899946"
      },
      {
        "name": "cat1 child 3",
        "name2": "",
        "name3": "",
        "slug": "cat1-child-3",
        "slug2": "",
        "slug3": "",
        "image": null,
        "disabled": false,
        "hideFromHomePage": true,
        "hideFromHomeMenu": true,
        "displayOrder": 2,
        "parentId": "d43c3f49-0cf3-6f74-1d37-39fbe1883707",
        "parentName": "cat 1",
        "isDeleted": false,
        "deleterId": null,
        "deletionTime": null,
        "lastModificationTime": null,
        "lastModifierId": null,
        "creationTime": "2021-04-14T07:55:36.2717471Z",
        "creatorId": "c9f7af60-5d3f-abec-035d-39fbd24c630d",
        "id": "673def50-767e-c7e2-8923-39fbe18db849"
      }
    ]
  };
  nodes = [];
  constructor(private nzContextMenuService: NzContextMenuService) { }

  ngOnInit(): void {
    const idMapping = this.data.items.reduce((acc, el, i) => {
      acc[el.id] = i;
      return acc;
    }, {});

     
    this.data.items.forEach(el => {
      el.title = el.name;
      el.key= el.id;
      el.isLeaf= true;
      // Handle the root element
      if (el.parentId === null) {        
        this.nodes.push(el);
        return;
      }
      // Use our mapping to locate the parent element in our data array
      const parentEl = this.data.items[idMapping[el.parentId]];
      // Add our current el to its parent's `children` array
      parentEl.children = [...(parentEl.children || []), el];
      parentEl.isLeaf= false;
    });

  }

  nodes2 = [
    {
      title: '0-0',
      key: '00',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '000',
          expanded: true,
          children: [
            { title: '0-0-0-0', key: '0000', isLeaf: true },
            { title: '0-0-0-1', key: '0001', isLeaf: true },
            { title: '0-0-0-2', key: '0002', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '001',
          children: [
            { title: '0-0-1-0', key: '0010', isLeaf: true },
            { title: '0-0-1-1', key: '0011', isLeaf: true },
            { title: '0-0-1-2', key: '0012', isLeaf: true }
          ]
        },
        {
          title: '0-0-2',
          key: '002'
        }
      ]
    },
    {
      title: '0-1',
      key: '01',
      children: [
        {
          title: '0-1-0',
          key: '010',
          children: [
            { title: '0-1-0-0', key: '0100', isLeaf: true },
            { title: '0-1-0-1', key: '0101', isLeaf: true },
            { title: '0-1-0-2', key: '0102', isLeaf: true }
          ]
        },
        {
          title: '0-1-1',
          key: '011',
          children: [
            { title: '0-1-1-0', key: '0110', isLeaf: true },
            { title: '0-1-1-1', key: '0111', isLeaf: true },
            { title: '0-1-1-2', key: '0112', isLeaf: true }
          ]
        }
      ]
    },
    {
      title: '0-2',
      key: '02',
      isLeaf: true
    }
  ];
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  selectDropdown(): void {
    // do something
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  nzEventOver(event: NzFormatEmitEvent): void {
    console.log(event);
  }

}
