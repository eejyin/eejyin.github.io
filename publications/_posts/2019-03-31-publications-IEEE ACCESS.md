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
As shown in Figure 1, we consider a cognitive Machine-to-Machine (M2M) network, which consists of a centralized Base station (BS), $K$  Cellular user equipments (CUEs), and $N$ M2M pairs. 
<br>
Each CUE occupies one orthogonal spectrum sub-channel of equal bandwidth to perform uplink communication with the BS. The sets of CUEs and sub-channels are denoted as $\mathcal {C}= \lbrace C_1,C_2,\ldots, C_k,\ldots, C_K\rbrace$ and $\mathcal {S}=\lbrace S_1, S_2,\ldots, S_k,\ldots, S_K\rbrace$, respectively. The sets of indices are denoted as $\mathcal {K}= \lbrace 1, 2,\ldots, k,\ldots, K\rbrace$.
<br>
Each M2M pair is composed of a M2M transmitter (MT) and a M2M receiver (MR). 
To implement the cognitive M2M communication, each M2M pair has to reuse the sub-channel allocated to a CUE.  Denote the sets of M2M pairs as $\mathcal {M}= \lbrace M_1, M_2, \ldots, M_n,\ldots, M_N\rbrace$ and the sets of corresponding indices as $\mathcal {N}= \lbrace 1, 2,\ldots, n,\ldots, N\rbrace$. And the sets of MTs and MRs of M2M pairs are denoted as $\mathcal {MT}= \lbrace MT_1, MT_2, \ldots, MT_n,\ldots, MT_N\rbrace$, $\mathcal {MR}= \lbrace MR_1, MR_2, \ldots, MR_n,\ldots, MR_N\rbrace$, respectively.
<br>
A M2M pair is allowed to reuse the CUE's sub-channel for data dissemination if and only if certain constraints are satisfied, \textit{e.g.}, the rate and the delay constraints. Intuitively, a CUE is more willing to share its sub-channel with a M2M pair, which causes  less interference to it and is more likely to refuse the request of a M2M pair, which causes serious interference.
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


