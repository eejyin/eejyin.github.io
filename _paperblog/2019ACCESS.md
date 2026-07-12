---
layout: post
title: QoE-Oriented Rate Control and Resource Allocation for Cognitive M2M Communication
description: A walkthrough of my IEEE Access paper on QoE-oriented uplink rate control and resource allocation for cognitive M2M communication in spectrum-sharing OFDM networks.
date: 2019-03-31
permalink: /publications/paperblog/2019ACCESS/
related_posts: false
---

A short write-up of my IEEE Access paper. Read the published version on
<a href="https://ieeexplore.ieee.org/document/8678771" target="_blank">IEEE Xplore</a>
or download the
<a href="{{ '/assets/pdf/2019ACCESS-M2M.pdf' | relative_url }}" target="_blank"><span class="icon-file-pdf" style="color: #ee3f24"></span> PDF</a>.

* Contents
{:toc}

## Highlights

- A novel QoE-oriented uplink **rate control and resource allocation** scheme is proposed, for IoT using time-varying channels.
- A **Mean Opinion Score (MOS)** model is designed to measure the degree of Quality of Experience (QoE).
- The original long-term optimization problem is converted into an admission rate control subproblem and a resource allocation subproblem in each time slot, based on **Lyapunov optimization**.
- **Gale–Shapley matching** is utilized, exploiting the special structure of the resource allocation subproblem.

## Scenario

<div class="paperblog-figure">
  <img src="{{ '/assets/img/blog/M2M-1.png' | relative_url }}" alt="System model of M2M-based uplink IoT network" loading="lazy">
  <p class="paperblog-caption">Figure 1. System model of M2M-based uplink IoT network.</p>
</div>

<p style="text-align: justify;">
As shown in Figure 1, we consider a cognitive Machine-to-Machine (M2M) network, which consists of a centralized Base station (BS), $K$ Cellular user equipments (CUEs), and $N$ M2M pairs.
<br>
Each CUE occupies one orthogonal spectrum sub-channel of equal bandwidth to perform uplink communication with the BS. The sets of CUEs and sub-channels are denoted as $\mathcal {C}= \lbrace C_1,C_2,$ $\ldots, C_k,$ $\ldots, C_K\rbrace$ and $\mathcal {S}=\lbrace S_1, S_2,$ $\ldots, S_k,$ $ \ldots, S_K\rbrace$, respectively. The sets of indices are denoted as $\mathcal {K}= \lbrace 1, 2,$ $\ldots, k,$ $\ldots, K\rbrace$.
<br>
Each M2M pair is composed of a M2M transmitter (MT) and a M2M receiver (MR). To implement the cognitive M2M communication, each M2M pair has to reuse the sub-channel allocated to a CUE. Denote the sets of M2M pairs as $\mathcal {M}= \lbrace M_1, M_2, $ $\ldots, M_n,$ $\ldots, M_N\rbrace$ and the sets of corresponding indices as $\mathcal {N}= \lbrace 1, 2,$ $\ldots, n,$ $\ldots, N\rbrace$. And the sets of MTs and MRs of M2M pairs are denoted as $\mathcal {MT}= \lbrace MT_1, MT_2, $ $\ldots, MT_n,$ $\ldots, MT_N\rbrace$, $\mathcal {MR}= \lbrace MR_1, MR_2, $ $\ldots, MR_n,$ $\ldots, MR_N\rbrace$, respectively.
<br>
A M2M pair is allowed to reuse the CUE's sub-channel for data dissemination if and only if certain constraints are satisfied, <i>e.g.</i>, the rate and the delay constraints. Intuitively, a CUE is more willing to share its sub-channel with a M2M pair which causes less interference to it, and is more likely to refuse the request of a M2M pair which causes serious interference.
</p>

## Algorithm

<div class="paperblog-figure">
  <img src="{{ '/assets/img/blog/M2Mmatching.png' | relative_url }}" alt="Gale–Shapley matching between M2M pairs and sub-channels" loading="lazy">
  <p class="paperblog-caption">Figure 2. Gale–Shapley matching between M2M pairs and sub-channels.</p>
</div>

```latex
\begin{algorithm}[!htbp]
    \caption{Gale-Shapley-based resource allocation algorithm}
    \begin{algorithmic}[1]
        \STATE $\mathcal {M}$: The set of M2M pairs
        \STATE $\mathcal {S}$: The set of subchannels
        \FOR{$n=1$ to $| \mathcal {M}|$}
        \STATE sort the subchannels of each M2M pair according to $R_{n}(t)$ in decreasing order
        \ENDFOR
        \FOR{$k=1$ to $| \mathcal {S}|$}
        \STATE sort the M2M pair of each subchannel according to $\gamma_{C_{k}}(t)$ in decreasing order
        \ENDFOR
        \STATE Apply the Gale-Shapley Algorithm to find $\omega_n^k$
        \IF{(the transmission rate for M2M pairs and the QoS for the cellular users can be both satisfied)}
        \STATE the considered subchannel is assigned to the M2M pair
        \ELSE
        \STATE the considered subchannel cannot be assigned to the M2M pair
        \ENDIF
        \STATE The matching results of the n couples are declared
    \end{algorithmic}
\end{algorithm}
```

## Citation map

As of a September 2022 snapshot, this paper had been cited 15 times (see
<a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4UxQ7JcAAAAJ&sortby=pubdate&citation_for_view=4UxQ7JcAAAAJ:u5HHmVD_uO8C" target="_blank">Google Scholar</a>):

<div class="paperblog-figure">
  <img src="{{ '/assets/img/blog/M2M-citation.png' | relative_url }}" alt="Citation map of the paper" loading="lazy">
</div>
