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



The coal industry contributes significantly to the social economy, but the emission of greenhouse gases puts huge pressure on the environment in the process of mining, transportation, and power generation. In <b>the integrated energy system (IES)</b>, the current research about the <b>power-to-gas (P2G)</b> technology mainly focuses on the injection of hydrogen generated from renewable energy electrolyzed water into natural gas pipelines, which may cause hydrogen embrittlement of the pipeline and cannot be repaired. In this paper, sufficient hydrogen energy can be produced through P2G technology and <b>coal-to-hydrogen (C2H)</b> of coal gasification, considering the typical scenario of coal district is rich in coal and renewable energy. In order to transport the mined coal to the destination, hydrogen heavy trucks have a broad space for development, which can absorb hydrogen energy in time and avoid potentially dangerous hydrogen injection into pipelines and relatively expensive hydrogen storage. An optimized scheduling model of electric-gas IES is proposed based on <b>second-order cone programming (SOCP)</b>. In the model proposed above, the closed industrial loop (including coal mining, hydrogen production, truck transportation of coal, and integrated energy systems) has been innovatively studied, to consume renewable energy and coordinate multi-energy. Finally, an electric-gas IES study case constructed by <b>IEEE 30-node power system and Belgium 24-node natural gas network</b> was used to analyze. The results show that by introducing the proposed hydrogen production technology, typical daily operating costs are effectively reduced by 7.7%. Under China’s <b>carbon emissions trading</b> system, the operating costs of hydrogen heavy trucks have been reduced by 0.95 and 4.68% respectively, compared with electric vehicles and diesel trucks. Under Europe’s stricter carbon emissions trading system, the percentages of cost reduction are 2.56 and 9.12%, respectively. The above technical results verify the <b>feasibility, economy, low carbon, and effectiveness</b> of the proposed mechanism.
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



