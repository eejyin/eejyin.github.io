---
layout: post
title: Frontiers in Energy Research - Integrated Energy System
description: >
  Feel free to download <a href="/assets/files/2020FER-Integrated Energy System Optimal Operation in Coal District With Hydrogen Heavy Trucks.pdf"  target="_blank"> <span class="icon-file-pdf" style="font-size:10px; color: #ee3f24"></span> PDF</a>. <a href="https://scholar.google.co.uk/citations?view_op=view_citation&amp;hl=en&amp;user=4UxQ7JcAAAAJ&amp;sortby=pubdate&amp;citation_for_view=4UxQ7JcAAAAJ:Y0pCki6q_DkC" class="no-mark-external" target="_blank" alt="Google Scholar"> <span class="icon-googlescholar1"></span> <span aria-hidden="true">Google Scholar </span><span class="sr-only"></span></a>
image: 
  path: /assets/img/blog/frontiers.jpg
  srcset:
    1060w: /assets/img/blog/frontiers.jpg
    530w:  /assets/img/blog/frontiers@0,5x.jpg
    265w:  /assets/img/blog/frontiers@0,25x.jpg
tags: []
permalink: /publications/2021IES
related_posts:
  - example/_posts/2017-11-23-example-content-ii.md
---
# Integrated Energy System Optimal Operation in Coal District With Hydrogen Heavy Trucks

* this unordered seed list will be replaced by the toc 
{: toc}
---

## Highlights

* The application feasibility of **hydrogen heavy trucks** is discussed, in the typical scenario of coal districts.
* Hydrogen production becomes renewable by absorbing wind power, combining **power-to-gas (P2G)** technology and **coal-to-hydrogen (C2H)** of coal gasification.
* The efficient **closed loop** of hydrogen energy from generation to utilization is proposed, avoiding the potential **hydrogen embrittlement** of the pipeline.
* An optimized scheduling model of electric-gas IES is proposed based on **second-order cone programming (SOCP)**.
* The feasibility, economy, low carbon, and effectiveness of the proposed **integrated electric-gas system** mechanism are analyzed.


---

## Scenario

<img src="/assets/img/blog/IES.png" width="80%"><br>
FIGURE 1. Coal district considering hydrogen heavy trucks and P2G equipment model of wind power to H2 and CH4.
{:.figure}

<p style="text-align:justify;">
As shown in Figure 1, the <b>closed industrial loop</b> between coal mining, hydrogen production, truck transportation of coal, and integrated energy systems has been innovatively proposed. In the coal mining process, part of the coal is used to produce hydrogen through <b>C2H technology</b>, and the other part is transported to power plants by <b>hydrogen heavy trucks</b>, which consume a lot of energy in the transportation process. Wind power is highly volatile and cannot be directly connected to the grid. Therefore, wind power produces <b>hydrogen</b> (energy for hydrogen heavy trucks) through electrolysis of water, and part of the hydrogen is further methanated to produce <b>methane</b> (injected into natural gas pipelines). Note that in this article, only the daily operating emissions (variable cost) is considered, and the emissions caused by the initial equipment investment (fixed cost) are not considered. Among them, coal is used for hydrogen production or transportation, and wind power is used for hydrogen production or methanation. By combining the needs of the coupled energy network, real-time optimized dispatching is carried out.
</p>

---

## Power-to-Gas(P2G) Flow

<img src="/assets/img/blog/P2G.png" width="80%"><br>
FIGURE 2. Schematic diagram of actual flow and variable symbols of P2G equipment.
{:.figure}


## Comparison of heavy trucks with different power types

|                       | Hydrogen truck              | Electric vehicle(EV)         | Diesel oil truck           |
|-----------------------|-----------------------------|------------------------------|----------------------------|
| Filling time          | 10-15 min                   | Several hours                | 10-15 min                  |
| Recharge mileage      | 500-750 mile                | 100-300 mile                 | 500-750 mile               |
|                       | (Long-distance freight)     | (Short-distance freight)     |                            |
| Impact on the grid    | Buffer                      | Relatively large             | No impact                  |
| Energy sustainability | Promising                   | Depend on battery technology | Limited reserves           |
| Emission              | Zero                        | Zero                         | High                       |
| Single subsidy        | $54.6 \times 10^4$ ￥ | $5.5 \times 10^4$ ￥   | $1.4 \times 10^4$ ￥ |
| Market share in 2030  | $>$50\%                     | $\approx$40\%                | $\approx$5\%               |
| Fuel weight           | Very light                  | Relatively heavy             | Heavy                      |
| Fuel cost in 2025     | 25￥/kg               | 1.0-1.6￥/kWh          | 50 ￥/t              |
| Fuel consumption      | 7 kg/km                     | 200 kWh/km                   | 30 L/km                    |



