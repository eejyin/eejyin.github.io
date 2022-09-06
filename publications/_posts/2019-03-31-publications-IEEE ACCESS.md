---
layout: post
title: IEEE ACCESS - M2M Communication
description: >
  Feel free to download <a href="/assets/files/2019ACCESS-QoE-Oriented Rate Control and Resource Allocation for Cognitive M2M Communication in Spectrum-Sharing OFDM Networks.pdf"  target="_blank"> <span class="icon-file-pdf" style="font-size:10px; color: #ee3f24"></span> PDF</a>.
image: 
  path: /assets/img/blog/M2M.jpg
  srcset:
    1060w: /assets/img/blog/M2M.jpg
    530w:  /assets/img/blog/M2M@0.5x.jpg
    265w:  /assets/img/blog/M2M@0.25x.jpg
sitemap: false
permalink: /publications/2019M2M
---

## Highlights

* A novel QoE-oriented uplink rate control and resource allocation schemes is propesed, for IoT using time-varying channels.
* Mean Opinion Score (MOS) model is designed to measure the degree of Quality of Experience (QoE).
* The original long-term optimization problem is converted into admission rate control subproblem and resource allocation subproblem in each time slot, based on the **Lyapunov optimization**.
* **Gale-Shapley matching** is utilized, with exploiting the special structure of the resource allocation subproblem.


## Scenario

![Full-width image](/assets/img/blog/M2M-1.png){:.lead width="100%"}
FIGURE 1. System model of M2M-based uplink IoT network.
{:.figure}  

As shown in Figure 1, we consider the uplink of a M2M-based IoT network, consisting of one centralized base station (BS), multiple cellular user equipments (CUEs), and potential M2M pairs. CUEs use orthogonal spectrum subchannels to communicate with the base station. Then,  M2M pairs can multiplex cellular user equipments' subchannels. In the network, there are N Machine-to-Machine pairs, K  Subchannels and K CUEs, the sets of which are denoted as $\mathcal {M}= \lbrace M_1, \ldots, M_n,\ldots, M_N\rbrace$, $\mathcal {S}=\lbrace S_1,\ldots, S_k,\ldots, S_K\rbrace$ and  $\mathcal {C}= \lbrace C_1,\ldots, C_k,\ldots, C_K\rbrace$, respectively. The sets of indices are denoted as $\mathcal {N}= \lbrace 1, 2,\ldots, n,\ldots, N\rbrace$ and $\mathcal {K}= \lbrace 1, 2,\ldots, k,\ldots, K\rbrace$, respectively.

 Each M2M pair is formed by one machine transmitter (content provider) and one machine receiver (content consumer), and there exist some M2M-based machine transmitters and receivers, which are denoted as MTs and MRs, respectively. The OFDM network operates in a time-slotted manner with a time-slot index $\mathcal {T}\in \{0, 1, 2, . . .\}$. Each machine transmitter needs to send data to machine receiver,
and the data from the outside arrives at the machine transmitter at each time slot.  In this paper, we assume that the peer discovery process of M2M pairs between transmitters and receivers is already finished and each CUE occupies one orthogonal spectrum subchannel. We focus on how to maximize the Mean Opinion Score (MOS) of all M2M pairs, which involves the joint optimization of admission rate control, transmission power allocation, and subchannel selection. 

## Abstract

With the development of wireless communication systems, it is particularly essential to maximize the quality of experience (QoE) of machine-to-machine (M2M) communication. In this paper, we propose a new QoE-oriented uplink rate control and resource allocation scheme for the Internet of Things (IoT) network, by introducing an evaluation model based on mean opinion score (MOS) for different machine-type communication (MTC) devices. The existing works are only dedicated to solving the short-term resource allocation problems by considering the current transmission time slots, which cannot handle long-standing problems. To this end, based on the recently developed Lyapunov optimization, we convert the original long-term optimization problem into the admission rate control subproblem and the resource allocation subproblem in each time slot. To solve the joint power optimization and sub-channel selection subproblems, Gale-Shapley algorithm is utilized to formulate it as a two-dimensional matching problem, and the preference lists are established by the transmission rate and signal to interference plus noise ratio (SINR). In the proposed algorithms, a priority mechanism is employed to ensure fairness. The simulation results demonstrate that without prior knowledge of the data arrivals and sub-channel statistics, the proposed algorithms can significantly improve the overall perceived quality from the users' perspective.