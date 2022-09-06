---
layout: post
title: IEEE ACCESS - M2M Communication
description: >
  Feel free to download <a href="/assets/files/2019ACCESS-QoE-Oriented Rate Control and Resource Allocation for Cognitive M2M Communication in Spectrum-Sharing OFDM Networks.pdf"  target="_blank"> <span class="icon-file-pdf" style="font-size:10px; color: #ee3f24"></span> PDF </a>. <a href="https://scholar.google.co.uk/citations?view_op=view_citation&amp;hl=en&amp;user=4UxQ7JcAAAAJ&amp;sortby=pubdate&amp;citation_for_view=4UxQ7JcAAAAJ:u5HHmVD_uO8C" class="no-mark-external" target="_blank" alt="Google Scholar"> <span class="icon-googlescholar1"></span> <span aria-hidden="true">Google Scholar Link</span><span class="sr-only"></span></a>
image: 
  path: /assets/img/blog/M2M.jpg
  srcset:
    1060w: /assets/img/blog/M2M.jpg
    530w:  /assets/img/blog/M2M@0.5x.jpg
    265w:  /assets/img/blog/M2M@0.25x.jpg
tags: []
permalink: /publications/2019M2M
related_posts:
  - example/_posts/2017-11-23-example-content-ii.mdv
---
# QoE-Oriented Rate Control and Resource Allocation for Cognitive M2M Communication in Spectrum-Sharing OFDM Networks

* this unordered seed list will be replaced by the toc 
{: toc}

---

## Highlights

* A novel QoE-oriented uplink **rate control and resource allocation** schemes is propesed, for IoT using time-varying channels.
* **Mean Opinion Score (MOS)** model is designed to measure the degree of Quality of Experience (QoE).
* The original long-term optimization problem is converted into admission rate control subproblem and resource allocation subproblem in each time slot, based on the **Lyapunov optimization**.
* **Gale-Shapley matching** is utilized, with exploiting the special structure of the resource allocation subproblem.

---

## Scenario

<img src="/assets/img/blog/M2M-1.png" width="80%"><br>
FIGURE 1. System model of M2M-based uplink IoT network.
{:.figure}  

<p style="text-align:justify;">
As shown in Figure 1, we consider the uplink of a M2M-based IoT network, consisting of one centralized base station (BS), multiple cellular user equipments (CUEs), and potential M2M pairs. CUEs use orthogonal spectrum subchannels to communicate with the base station. Then,  M2M pairs can multiplex cellular user equipments' subchannels. In the network, there are N Machine-to-Machine pairs, K  Subchannels and K CUEs, the sets of which are denoted as $\mathcal {M} = \lbrace M_1, \ldots, M_n,\ldots, M_N\rbrace $, $ \mathcal {S} = \lbrace S_1,\ldots, S_k,\ldots, S_K\rbrace $ and  $ \mathcal {C} = \lbrace C_1,\ldots, C_k,\ldots, C_K\rbrace $, respectively. The sets of indices are denoted as $ \mathcal {N}= \lbrace 1, 2,\ldots, n,\ldots, N\rbrace $ and $ \mathcal {K} = \lbrace 1, 2,\ldots, k,\ldots, K\rbrace $, respectively.
<br>
 Each M2M pair is formed by one machine transmitter (content provider) and one machine receiver (content consumer), and there exist some M2M-based machine transmitters and receivers, which are denoted as MTs and MRs, respectively. The OFDM network operates in a time-slotted manner with a time-slot index $ \mathcal {T} \in \{0, 1, 2, . . .\} $. Each machine transmitter needs to send data to machine receiver, and the data from the outside arrives at the machine transmitter at each time slot.  In this paper, we assume that the peer discovery process of M2M pairs between transmitters and receivers is already finished and each CUE occupies one orthogonal spectrum subchannel. We focus on how to maximize the Mean Opinion Score (MOS) of all M2M pairs, which involves the joint optimization of admission rate control, transmission power allocation, and subchannel selection. 
</p>

---


## Algorithm

<img src="/assets/img/blog/M2Mmatching.png" width="80%"><br>

```latex
\begin{algorithm}[!htbp]
	\caption{Gale-Shapley-based resource allocation algorithm}
	\begin{algorithmic}[1]
		\STATE$\mathcal {M}$: The set of M2M pairs 
		\STATE$\mathcal {S}$: The set of subchannels
		\FOR{$n=1$ to $| \mathcal {M}|$}
		\STATE sort the subchannels of each M2M pair according to  $R_{n}(t)$ in decreasing order
		\ENDFOR
		\FOR{$k=1$ to $| \mathcal {S}|$}
		\STATE sort the M2M pair of each subchannel according to  $ \gamma_{C_{k}}(t)$ in decreasing order
		\ENDFOR
		\STATE Apply the Gale-Shapley Algorithm to find  $\omega_n^k$
		\IF{(the transmission rate for M2M pairs and the QoS for the cellular users can be both satisisfied)}
		\STATE the considered subchannel is assigned to the M2M pair
		\ELSE
		\STATE the considered subchannel cannot be assigned to the M2M pair
		\ENDIF
		\STATE The matching results of the n couples  are declared
	\end{algorithmic}
\end{algorithm}
```

---


## Citation Map
This paper, on <a href="https://scholar.google.co.uk/citations?view_op=view_citation&amp;hl=en&amp;user=4UxQ7JcAAAAJ&amp;sortby=pubdate&amp;citation_for_view=4UxQ7JcAAAAJ:u5HHmVD_uO8C" class="no-mark-external" target="_blank" alt="Google Scholar"> <span class="icon-googlescholar1"></span> <span aria-hidden="true">Google Scholar </span><span class="sr-only"></span></a>, has been cited 15 times, as of Sep. 6, 2022:
![Full-width image](/assets/img/blog/M2M-citation.png){:.lead width="100%" loading="lazy"}


