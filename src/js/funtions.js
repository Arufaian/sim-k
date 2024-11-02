export function home() {
  return `<div class="container-fluid position-relative" id="hero">
            <div class="mb-3 pt-5">
              <h1 class="fs-2 fw-bold">Sistem informasi managemen karyawan</h1>
              <h2 class="fs-4 fw-light pt-3">Admin dashboard</h2>
            </div>
          </div>

        <div class="container-fluid pt-5">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-3">
                <!-- card -->
                <div class="card mb-3 p-1">
                  <div class="row g-0">
                    <div
                      class="col-md-4 d-flex align-items-center justify-content-center bg-primary rounded"
                    >
                      <i class="bi bi-people-fill fs-1 text-light"></i>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body text-center">
                        <h5 class="card-title">Data pegawai</h5>
                        <p class="card-text"></p>
                        <p class="card-text"><span class="fs-4">13</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <!-- card -->
                <div class="card mb-3 p-1">
                  <div class="row g-0">
                    <div
                      class="col-md-4 d-flex align-items-center justify-content-center bg-success rounded"
                    >
                      <i class="bi bi-calendar2-check-fill fs-1 text-light"></i>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body text-center">
                        <h5 class="card-title">Absensi</h5>
                        <span class="card-title"
                          ><small class="text-muted"
                            >1 november 2024</small
                          ></span
                        >
                        <p class="card-text"><span class="fs-4">13</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <!-- card -->
                <div class="card mb-3 p-1">
                  <div class="row g-0">
                    <div
                      class="col-md-4 d-flex align-items-center justify-content-center bg-info rounded"
                    >
                      <i class="bi bi-clipboard-check fs-1 text-light"></i>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body text-center">
                        <h5 class="card-title">Izin</h5>
                        <span class="card-text"
                          ><small class="text-muted"
                            >Menunggu dikonfirmasi</small
                          ></span
                        >
                        <p class="card-text"><span class="fs-4">13</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <!-- card -->
                <div class="card mb-3 p-1">
                  <div class="row g-0">
                    <div
                      class="col-md-4 d-flex align-items-center justify-content-center bg-warning rounded"
                    >
                      <i class="bi bi-person-workspace fs-1 text-light"></i>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body text-center">
                        <h5 class="card-title">Lembur</h5>
                        <span class="card-title"
                          ><small class="text-muted"
                            >Menunggu konfirmasi</small
                          ></span
                        >
                        <p class="card-text"><span class="fs-4">13</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          `;
}

export function karyawan() {
  return `<div class="container-fluid position-relative" id="hero">
                <div class="mb-3 pt-5">
                    <h1 class="fs-2 fw-bold">Sistem informasi managemen karyawan</h1>
                    <h2 class="fs-4 fw-light pt-3">Menu data karyawan</h2>
                </div>
          </div>
          
        <div class="container-fluid pt-5">
            <div class="row">
              <div class="col">
                <div class="card shadow">
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between pb-3 mb-4 border-bottom"
                    >
                      <!-- card header -->
                      <h5 class="card-title">Data karyawan</h5>
                      <button
                        class="btn btn-primary rounded p-2"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-data-karyawan"
                      >
                        <i class="bi bi-plus-lg text-light"></i>
                        <span class="fw-bold">tambah data</span>
                      </button>
                    </div>
                    <!-- table -->
                    <div class="table-responsive">
                      <table class="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">Nomor</th>
                            <th scope="col">Kode</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Email</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Jabatan</th>
                            <th scope="col">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>K001</td>
                            <td>Jordi</td>
                            <td>jordi@gmail.com</td>
                            <td>Jalan jalan santai</td>
                            <td>Staff</td>
                            <td>
                              <div class="d-flex justify-content-evenly">
                                <button class="btn btn-primary">
                                  <i class="bi bi-pencil-square"></i>
                                </button>
                                <button class="btn btn-danger">
                                  <i class="bi bi-trash3"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          `;
}

export function input() {
  return `
          
          
        <div class="container-fluid mt-5">
            <div class="card">
              <div class="card-body">
                <div class="py-3 border-bottom mb-5">
                  <h5 class="card-title">Tambah data karyawan</h5>
                </div>

                <form>
                  <div class="mb-3">
                    <label for="inputNama" class="form-label"
                      >Nama lengkap</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="inputNama"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="gender" class="form-label">Jenis kelamin</label>
                    <select
                      id="gender"
                      class="form-select form-select-lg"
                      aria-label="Large select example"
                    >
                      <option selected></option>
                      <option value="laki-laki">laki-laki</option>
                      <option value="perempuan">perempuan</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                      >Email address</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="input-nomor-hape" class="form-label"
                      >Nomor hape</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="input-nomor-hape"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="Textarea" class="form-label">Alamat</label>
                    <textarea
                      class="form-control"
                      id="Textarea"
                      style="height: 100px"
                    ></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="input-jabatan" class="form-label"
                      >Jabatan</label
                    >
                    <select
                      id="input-jabatan"
                      class="form-select form-select-lg"
                      aria-label="Large select example"
                    >
                      <option selected></option>
                      <option value="laki-laki">-</option>
                      <option value="perempuan">-</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="input-divisi" class="form-label">divisi</label>
                    <select
                      id="input-divisi"
                      class="form-select form-select-lg"
                      aria-label="Large select example"
                    >
                      <option selected></option>
                      <option value="laki-laki">-</option>
                      <option value="perempuan">-</option>
                    </select>
                  </div>

                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
          
          
          
          `;
}

export function jabatan() {
  return ` 
    <div class="container-fluid position-relative" id="hero">
        <div class="mb-3 pt-5">
            <h1 class="fs-2 fw-bold">Sistem informasi managemen karyawan</h1>
            <h2 class="fs-4 fw-light pt-3">Menu data jabatan</h2>
        </div>
    </div>

    <div class="container-fluid mt-5">
        <div class="row">
        <div class="col">
            <div class="card">
            <div class="card-body">
                <div
                class="d-flex justify-content-between pb-3 mb-4 border-bottom"
                >
                <!-- card header -->
                <h5 class="card-title">Data Jabatan</h5>
                <button
                    class="btn btn-primary rounded p-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-data-karyawan"
                >
                    <i class="bi bi-plus-lg text-light"></i>
                    <span class="fw-bold">tambah jabatan</span>
                </button>
                </div>
                <!-- table -->
                <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Nomor</th>
                        <th scope="col">Kode jabatan</th>
                        <th scope="col">Jabatan</th>
                        <th scope="col">Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>JAB001</td>
                        <td>Staff</td>
                        <td>
                        <div class="d-flex justify-content-evenly">
                            <button class="btn btn-primary">
                            <i class="bi bi-pencil-square"></i>
                            </button>
                            <button class="btn btn-danger">
                            <i class="bi bi-trash3"></i>
                            </button>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    
    
    `;
}

export function divisi() {
  return `
          <div class="container-fluid position-relative" id="hero">
            <div class="mb-3 pt-5">
              <h1 class="fs-2 fw-bold">Sistem informasi managemen karyawan</h1>
              <h2 class="fs-4 fw-light pt-3">Menu data divisi</h2>
            </div>
          </div>

          <div class="container-fluid mt-5">
            <div class="row">
              <div class="col">
                <div class="card shadow">
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between pb-3 mb-4 border-bottom"
                    >
                      <!-- card header -->
                      <h5 class="card-title">Data Divisi</h5>
                      <button
                        class="btn btn-primary rounded p-2"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-data-karyawan"
                      >
                        <i class="bi bi-plus-lg text-light"></i>
                        <span class="fw-bold">tambah Divisi</span>
                      </button>
                    </div>
                    <!-- table -->
                    <div class="table-responsive">
                      <table class="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">Nomor</th>
                            <th scope="col">Kode jabatan</th>
                            <th scope="col">Nama Divisi</th>
                            <th scope="col">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>DIV001</td>
                            <td>Umum</td>
                            <td>
                              <div class="d-flex justify-content-evenly">
                                <button class="btn btn-primary">
                                  <i class="bi bi-pencil-square"></i>
                                </button>
                                <button class="btn btn-danger">
                                  <i class="bi bi-trash3"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;
}

export function absensi() {
  return `          
        <div class="container-fluid position-relative" id="hero">
            <div class="mb-3 pt-5">
              <h1 class="fs-2 fw-bold">Sistem informasi managemen karyawan</h1>
              <h2 class="fs-4 fw-light pt-3">Tabel absensi karyawan</h2>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                    <div class="card-body">
                        <div
                        class="d-flex justify-content-between pb-3 mb-4 border-bottom"
                        >
                        <!-- card header -->
                        <h5 class="card-title">Daftar hadir karyawan</h5>
                        </div>
                        <!-- table -->
                        <div class="table-responsive">
                        <table class="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama karyawan</th>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Lokasi absen</th>
                                <th scope="col">Jam masuk</th>
                                <th scope="col">Jam keluar</th>
                                <th scope="col">Aksi</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Joni sins</td>
                                <td>2024-10-1</td>
                                <td>Kampus</td>
                                <td>17:20</td>
                                <td>20:20</td>
                                <td>
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary">
                                    <i class="bi bi-eye"></i>
                                    </button>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
  `;
}
export function izin() {
  return `        
        <div class="container-fluid position-relative" id="hero">
            <div class="mb-3 pt-5">
              <h1 class="fs-2 fw-bold">Sistem informasi managemen karyawan</h1>
              <h2 class="fs-4 fw-light pt-3">Tabel izin</h2>
            </div>
        </div>

          <div class="container-fluid mt-5">
            <div class="row">
              <div class="col">
                <div class="card shadow">
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between pb-3 mb-4 border-bottom"
                    >
                      <!-- card header -->
                      <h5 class="card-title">Daftar Izin karyawan</h5>
                      <button class="btn btn-primary rounded">
                        <i class="bi bi-check fs-5"></i>
                        <span class="fw-bold">Ubah status</span>
                      </button>
                    </div>
                    <!-- table -->
                    <div class="table-responsive">
                      <table class="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama karyawan</th>
                            <th scope="col">Izin</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Jam masuk</th>
                            <th scope="col">Keterangan</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Joni sins</td>
                            <td>Pulang awal</td>
                            <td>2024-10-1</td>
                            <td>17:20</td>
                            <td>Sakit</td>
                            <td>
                              menunggu <br />
                              konfirmasi
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  `;
}
export function lembur() {
  return `        
        <div class="container-fluid position-relative" id="hero">
            <div class="mb-3 pt-5">
              <h1 class="fs-2 fw-bold">Sistem informasi managemen karyawan</h1>
              <h2 class="fs-4 fw-light pt-3">Tabel lembur</h2>
            </div>
        </div>


          <div class="container-fluid mt-5">
            <div class="row">
              <div class="col">
                <div class="card shadow">
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between pb-3 mb-4 border-bottom"
                    >
                      <!-- card header -->
                      <h5 class="card-title">Daftar lembur karyawan</h5>
                      <button class="btn btn-primary rounded">
                        <i class="bi bi-check fs-5"></i>
                        <span class="fw-bold">Ubah status</span>
                      </button>
                    </div>
                    <!-- table -->
                    <div class="table-responsive">
                      <table class="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama karyawan</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Jam mulai</th>
                            <th scope="col">Jam berakhir</th>
                            <th scope="col">Keperluan</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Joni sins</td>
                            <td>2024-10-1</td>
                            <td>17:20</td>
                            <td>18:20</td>
                            <td>Print</td>
                            <td>
                              menunggu <br />
                              konfirmasi
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;
}
