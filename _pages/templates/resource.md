---
layout: template
categories: [templates]
type: [sub-nav-item]
title: Resource Template
permalink: /templates/resource/
prototype-links: "/prototype-resouce"
description: 
details: |
    Layout Details will go here
    ### Related Series Module
    This module uses the [Related List](patterns/related-list) pattern. 

    The list is limited to a maximum of 6 items. And those items are selected using the most recent from the related taxonomy.
    
    - Module Title: "Also in this Series"
    - List
        - title - source: Resource Title
        - url - source: Resource Url
specs:
    - name: Title
      type: h1
      authored: yes
      content: 80 characters max
      searchable: yes
    - name: Summary
      type: text
      authored: yes
      content: 150 characters max
      searchable: yes
    - name: Body
      type: rich text
      authored: yes
    - name: Resource
      type: multi-valued
      notes: see sub-schema for individual resource needs
    - name: Resource Type
      type: drop-down
      authored: yes
      searchable: used for filtered search
      notes: not visiable on front end
    - name: Tags
      type: drop-down
      authored: yes
      content: taxonomy
      searchable: used for filtered search
      notes: not visiable on front end
---

TODO: Link to resource patterns:
- Video
- Attachement
- Highlight



{{ content | stringify }}